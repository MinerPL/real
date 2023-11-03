(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38604"], {
        762912: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aeb42e0789643a644dab.svg"
        },
        287277: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c4643b70509c385fcc83.svg"
        },
        353309: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1876c6a6db747137a124.svg"
        },
        16817: function(e, t, n) {
            "use strict";
            e.exports = n.p + "67816958a2d8a6c968e3.svg"
        },
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("759843"),
                i = n("627929"),
                r = n("913144"),
                s = n("81732"),
                o = n("282109"),
                u = n("840707"),
                a = n("519705"),
                d = n("49111"),
                c = n("397336"),
                f = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: f,
                            permissionOverwrites: E = [],
                            bitrate: _,
                            userLimit: p,
                            parentId: h,
                            skuId: S,
                            branchId: m
                        } = e;
                        r.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let C = {
                            type: n,
                            name: f,
                            permission_overwrites: E
                        };
                        if (null != _ && _ !== d.BITRATE_DEFAULT && (C.bitrate = _), null != p && p > 0 && (C.user_limit = p), null != h && (C.parent_id = h), n === d.ChannelTypes.GUILD_STORE) {
                            if (null == S) throw Error("Unexpected missing SKU");
                            C.sku_id = S, C.branch_id = m
                        }
                        return u.default.post({
                            url: d.Endpoints.GUILD_CHANNELS(t),
                            body: C,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, i.exact)({
                                        is_private: E.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (o.default.isOptInEnabled(t) && a.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), s.default.checkGuildTemplateDirty(t), e), e => {
                            throw r.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, r) => u.default.post({
                        url: d.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: r
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, i.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
        },
        167338: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatAlertIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12.032 21.505c-.05.27-.269.495-.544.495H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .542-.043 1.073-.126 1.591-.018.117-.17.142-.229.04-1.163-2.027-4.127-2.027-5.29 0l-3.96 6.897a3.069 3.069 0 0 0-.363.977Z",
                        className: o
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.09 14.627c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        495137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EnvelopeIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M1.163 5.022c-.096.28.038.577.285.741l10.275 6.85a.5.5 0 0 0 .554 0l10.275-6.85c.247-.164.381-.461.285-.74A3.001 3.001 0 0 0 20 3H4a3.001 3.001 0 0 0-2.837 2.022Z",
                        className: o
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M23 8.803a.5.5 0 0 0-.777-.416l-9.53 6.353c-.42.28-.966.28-1.386 0l-9.53-6.353A.5.5 0 0 0 1 8.803V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.803Z",
                        className: o
                    })]
                })
            }
        },
        804090: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HammerIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M1.233 21.134a1 1 0 0 1 0-1.414l7.475-7.475a.5.5 0 0 1 .707 0l2.121 2.121a.5.5 0 0 1 0 .707l-7.475 7.475a1 1 0 0 1-1.414 0l-1.414-1.414ZM7.758 7.76l8.485 8.485a2 2 0 0 0 2.829 0l3.535-3.536a2 2 0 0 0 0-2.828l-2.94-2.94.658-.656a1 1 0 0 0 0-1.414L18.91 3.456a1 1 0 0 0-1.414 0l-.657.657-2.717-2.717a2 2 0 0 0-2.829 0L7.758 4.93a2 2 0 0 0 0 2.829Z",
                        className: o
                    })
                })
            }
        },
        185020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MobilePhoneIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8Zm2 2a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        139375: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("233069"),
                i = n("27618"),
                r = n("697218"),
                s = n("679653"),
                o = n("49111"),
                u = n("782340");

            function a(e) {
                let {
                    isSubscriptionGated: t,
                    needSubscriptionToAccess: n
                } = e;
                if (t) return n ? u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
            }

            function d(e) {
                let t, {
                        channel: n,
                        unread: d = !1,
                        mentionCount: c = 0,
                        userCount: f,
                        embeddedActivitiesCount: E,
                        isSubscriptionGated: _,
                        needSubscriptionToAccess: p
                    } = e,
                    h = (0, s.computeChannelName)(n, r.default, i.default);
                switch (n.type) {
                    case o.ChannelTypes.DM:
                        t = d ? u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
                        break;
                    case o.ChannelTypes.GROUP_DM:
                        t = d ? u.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
                        break;
                    case o.ChannelTypes.GUILD_STORE:
                        t = u.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
                        break;
                    case o.ChannelTypes.GUILD_DIRECTORY:
                        t = u.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
                        break;
                    case o.ChannelTypes.GUILD_ANNOUNCEMENT:
                        t = c > 0 ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
                        break;
                    case o.ChannelTypes.GUILD_VOICE:
                        let S = [u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
                            channelName: n.name
                        })];
                        if (c > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
                                mentionCount: c
                            })), d && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != f) {
                            let e = n.userLimit;
                            null != e && e > 0 ? S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                                userCount: f,
                                limit: e
                            })) : S.push(u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
                                userCount: f
                            }))
                        }
                        null != E && E > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
                            activitiesCount: E
                        }));
                        let m = a({
                            isSubscriptionGated: _,
                            needSubscriptionToAccess: p
                        });
                        return null != m && S.push(m), S.join(", ");
                    case o.ChannelTypes.GUILD_STAGE_VOICE:
                        t = u.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
                        break;
                    default:
                        t = l.THREAD_CHANNEL_TYPES.has(n.type) ? c > 0 ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : d ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : c > 0 ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
                }
                let C = [t.format({
                        channelName: h,
                        mentionCount: c
                    })],
                    L = a({
                        isSubscriptionGated: _,
                        needSubscriptionToAccess: p
                    });
                return null != L && C.push(L), C.join(", ")
            }
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return p
                },
                MemberSafetyFlagType: function() {
                    return r
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return h
                },
                ModerationActionType: function() {
                    return s
                },
                useTrackModerationAction: function() {
                    return S
                }
            });
            var l, i, r, s, o = n("884691"),
                u = n("812204"),
                a = n("716241"),
                d = n("271938"),
                c = n("599110"),
                f = n("49111");

            function E(e, t, n) {
                var l;
                let i = {
                    ...t,
                    ...(0, a.collectGuildAnalyticsMetadata)(null !== (l = t.guild_id) && void 0 !== l ? l : n)
                };
                c.default.track(e, i)
            }

            function _(e) {
                let t = o.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        E(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function p(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        E(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(l = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled";

            function h(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        E(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function S(e, t) {
                let {
                    location: n,
                    targetUserId: l,
                    targets: i
                } = t, r = o.useCallback(t => {
                    let r = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != l ? l : void 0,
                        targets: null != i ? i : void 0
                    };
                    E(f.AnalyticEvents.MODERATION_ACTION, r)
                }, [e, n, l, i]);
                return r
            }(i = s || (s = {})).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname"
        },
        998940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
                    return o
                },
                MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
                    return u
                },
                MembersTableDateFormats: function() {
                    return i
                },
                formatDateRelativeTime: function() {
                    return c
                }
            });
            var l, i, r = n("319126"),
                s = n("782340");
            let o = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                },
                u = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                };
            (l = i || (i = {}))[l.JOINED_AT = 0] = "JOINED_AT", l[l.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
            let a = () => ({
                    seconds: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
                    minutes: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
                    hours: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
                    days: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
                    months: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
                    years: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
                }),
                d = () => ({
                    hours: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
                    days: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
                    months: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
                    years: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => {
                    var n;
                    let l = (n = t) === i.JOINED_AT ? a : n === i.ACCOUNT_AGE ? d : void 0;
                    return (0, r.default)(e, l, !1)
                }
        },
        553275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useContextMenuModerateRoles: function() {
                    return E
                },
                openMemberProfile: function() {
                    return _
                },
                useContextMenuModerateUser: function() {
                    return p
                },
                useHighestRole: function() {
                    return h
                },
                SearchState: function() {
                    return i
                },
                getSearchState: function() {
                    return S
                }
            });
            var l, i, r = n("884691"),
                s = n("65597"),
                o = n("685665"),
                u = n("401642"),
                a = n("305961"),
                d = n("697218"),
                c = n("441823"),
                f = n("49111");

            function E(e, t) {
                let {
                    analyticsLocations: n
                } = (0, o.default)();
                return r.useCallback(l => {
                    if (null == e) return;
                    let i = d.default.getUser(e.userId);
                    null != i && (l.stopPropagation(), (0, c.openModerateRoleContextMenu)(l, {
                        user: i,
                        guildId: e.guildId,
                        analyticsLocations: n,
                        onCloseContextMenu: t
                    }))
                }, [e, n, t])
            }
            let _ = e => {
                let {
                    guildId: t,
                    userId: n
                } = e;
                (0, u.openUserProfileModal)({
                    userId: n,
                    guildId: t,
                    analyticsLocation: {
                        section: f.AnalyticsSections.MEMBER_SAFETY_PAGE,
                        object: f.AnalyticsObjects.ACTIONED_BY_USER
                    }
                })
            };

            function p(e, t) {
                let {
                    analyticsLocations: n
                } = (0, o.default)();
                return r.useCallback(l => {
                    if (null == e) return;
                    let i = d.default.getUser(e.userId);
                    null != i && (l.stopPropagation(), (0, c.openModerateUserContextMenu)(l, {
                        user: i,
                        guildId: e.guildId,
                        analyticsLocations: n,
                        onCloseContextMenu: t
                    }))
                }, [e, t, n])
            }

            function h(e) {
                return (0, s.default)([a.default], () => {
                    var t;
                    if (null == e) return null;
                    let n = a.default.getGuild(e.guildId);
                    return null == n || null == e.highestRoleId ? null : null !== (t = n.roles[e.highestRoleId]) && void 0 !== t ? t : null
                }, [e])
            }

            function S(e, t, n) {
                return t ? i.LOADING : e ? i.SUCCESS_STILL_INDEXING : n <= 0 ? i.SUCCESS_EMPTY : i.SUCCESS_FULL
            }(l = i || (i = {}))[l.LOADING = 0] = "LOADING", l[l.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", l[l.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", l[l.SUCCESS_FULL = 3] = "SUCCESS_FULL"
        },
        412013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                s = n("581583"),
                o = n("843455");

            function u(e) {
                var t;
                let {
                    guildId: n,
                    role: u,
                    className: a
                } = e, d = (0, r.useToken)(r.tokens.unsafe_rawColors.PRIMARY_300).hex(), c = null !== (t = null == u ? void 0 : u.colorString) && void 0 !== t ? t : d, f = i.useMemo(() => ({
                    backgroundColor: "".concat(c, "27")
                }), [c]);
                return null == u ? null : (0, l.jsx)(s.MemberRole, {
                    className: a,
                    style: f,
                    role: u,
                    guildId: n,
                    canRemove: !1,
                    onRemove: o.NOOP
                })
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return s
                },
                formatPlanInterval: function() {
                    return o
                },
                formatPlanIntervalDuration: function() {
                    return u
                },
                isChannelBenefit: function() {
                    return a
                },
                isIntangibleBenefit: function() {
                    return d
                }
            });
            var l = n("677795"),
                i = n("646718"),
                r = n("782340");

            function s(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function o(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case i.SubscriptionIntervalTypes.DAY:
                            return r.default.Messages.DAY;
                        case i.SubscriptionIntervalTypes.MONTH:
                            return r.default.Messages.MONTH;
                        case i.SubscriptionIntervalTypes.YEAR:
                            return r.default.Messages.YEAR
                    }
                })(t).format({
                    count: n
                })
            }

            function u(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                switch (t) {
                    case i.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return r.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return r.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case i.SubscriptionIntervalTypes.MONTH:
                        return r.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case i.SubscriptionIntervalTypes.YEAR:
                        return r.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function a(e) {
                return e.ref_type === l.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function d(e) {
                return e.ref_type === l.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        679027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_PREVIEW_ROLE: function() {
                    return i
                }
            });
            var l = n("49111");
            let i = {
                id: "0",
                name: "",
                mentionable: !1,
                position: 0,
                hoist: !1,
                permissions: l.Permissions.SEND_MESSAGES,
                color: 0,
                colorString: "0",
                icon: null,
                unicodeEmoji: null,
                flags: 0
            }
        },
        971150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AllChannelAccessOptions: function() {
                    return i
                },
                useEditStateStore: function() {
                    return s
                }
            });
            var l, i, r = n("308503");
            (l = i || (i = {}))[l.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", l[l.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS";
            let s = (0, r.default)(e => ({
                listings: {},
                setListing: (t, n) => e(e => ({
                    listings: {
                        ...e.listings,
                        [t]: n(e.listings[t])
                    }
                })),
                editStateIdsForGroup: {},
                setEditStateIdsForGroup: (t, n) => e(e => ({
                    editStateIdsForGroup: {
                        ...e.editStateIdsForGroup,
                        [t]: n(e.editStateIdsForGroup[t])
                    }
                }))
            }))
        },
        167109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useName: function() {
                    return k
                },
                usePriceTier: function() {
                    return x
                },
                useDescription: function() {
                    return j
                },
                useImage: function() {
                    return O
                },
                useRoleIcon: function() {
                    return D
                },
                useRole: function() {
                    return F
                },
                useRoleColor: function() {
                    return y
                },
                useChannelAccessFormat: function() {
                    return U
                },
                useChannelBenefits: function() {
                    return B
                },
                useIntangibleBenefits: function() {
                    return H
                },
                useTierEmojiIds: function() {
                    return W
                },
                useTrialInterval: function() {
                    return Y
                },
                useTrialLimit: function() {
                    return V
                },
                useHasChanges: function() {
                    return z
                },
                useHasChangesForEditStateIds: function() {
                    return Z
                },
                useSubscriptionPlan: function() {
                    return K
                },
                clearEditState: function() {
                    return q
                },
                useCreateOrUpdateListingFromEditState: function() {
                    return Q
                },
                useEditStateIds: function() {
                    return $
                }
            });
            var l = n("884691"),
                i = n("627445"),
                r = n.n(i),
                s = n("917351"),
                o = n("748820"),
                u = n("509043"),
                a = n("446674"),
                d = n("150021"),
                c = n("851387"),
                f = n("385976"),
                E = n("271560"),
                _ = n("577357"),
                p = n("371358"),
                h = n("837008"),
                S = n("648825"),
                m = n("866595"),
                C = n("432153"),
                L = n("549590"),
                v = n("59767"),
                A = n("679027"),
                g = n("971150"),
                M = n("677795"),
                I = n("49111"),
                T = n("646718");

            function N(e, t, n) {
                let i = (0, g.useEditStateStore)(e => e.setListing),
                    r = l.useCallback(l => {
                        i(e, e => {
                            var i;
                            let r = null !== (i = null == e ? void 0 : e[t]) && void 0 !== i ? i : n,
                                s = "function" == typeof l ? l(r) : l;
                            return Object.assign({}, e, {
                                [t]: s
                            })
                        })
                    }, [i, e, t, n]),
                    s = (0, g.useEditStateStore)(n => {
                        var l;
                        return null === (l = n.listings[e]) || void 0 === l ? void 0 : l[t]
                    }),
                    o = void 0 !== s ? s : n;
                return [o, r]
            }

            function R(e, t) {
                let n = (0, a.useStateFromStores)([S.default], () => S.default.getSubscriptionListing(e));
                return l.useMemo(() => t(n), [n])
            }

            function k(e) {
                var t;
                let n = R(e, e => null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "");
                return N(e, "name", n)
            }

            function x(e) {
                let t = R(e, e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
                });
                return N(e, "priceTier", t)
            }

            function j(e) {
                var t;
                let n = R(e, e => null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : "");
                return N(e, "description", n)
            }

            function O(e, t) {
                let n = R(e, e => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, E.getAssetURL)(e.application_id, e.image_asset, t)
                });
                return N(e, "image", n)
            }

            function D(e, t) {
                var n, i;
                let r = (0, L.default)(t, e),
                    s = l.useMemo(() => ({
                        icon: null !== (n = null == r ? void 0 : r.icon) && void 0 !== n ? n : void 0,
                        unicodeEmoji: null !== (i = null == r ? void 0 : r.unicodeEmoji) && void 0 !== i ? i : void 0
                    }), [r]);
                return N(e, "roleIcon", s)
            }

            function F(e, t) {
                let n = (0, L.default)(t, e),
                    i = (0, g.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor
                    }),
                    r = (0, g.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon
                    });
                return l.useMemo(() => {
                    let e = {
                        ...null != n ? n : A.DEFAULT_PREVIEW_ROLE
                    };
                    if (void 0 !== r) {
                        var t, l;
                        e.icon = null !== (t = r.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (l = r.unicodeEmoji) && void 0 !== l ? l : ""
                    }
                    return void 0 !== i && (e.color = i, e.colorString = (0, u.int2hex)(i)), e
                }, [n, r, i])
            }

            function y(e, t) {
                var n;
                let i = (0, L.default)(t, e),
                    r = l.useMemo(() => null !== (n = null == i ? void 0 : i.color) && void 0 !== n ? n : I.DEFAULT_ROLE_COLOR, [i]);
                return N(e, "roleColor", r)
            }

            function U(e, t) {
                let n = (0, L.default)(t, e),
                    i = l.useMemo(() => null == n ? g.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, m.isAllChannelsRole)(n) ? g.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : g.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [n]);
                return N(e, "channelAccessFormat", i)
            }
            let b = [];

            function B(e) {
                let t = R(e, e => null == e ? b : e.role_benefits.benefits.filter(_.isChannelBenefit));
                return N(e, "channelBenefits", t)
            }
            let G = [];

            function H(e) {
                let t = R(e, e => null == e ? G : e.role_benefits.benefits.filter(_.isIntangibleBenefit));
                return N(e, "intangibleBenefits", t)
            }
            let w = new Set;

            function P(e, t) {
                if (0 === e.length) return w;
                let n = e.filter(e => e.roles.includes(t));
                return new Set(n.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }

            function W(e, t) {
                let n = (0, L.default)(t, e),
                    i = (0, a.useStateFromStoresArray)([f.default], () => f.default.getGuildEmoji(t), [t]),
                    r = l.useMemo(() => null == n ? w : P(i, n.id), [i, n]);
                return N(e, "tierEmojiIds", r)
            }

            function Y(e) {
                var t;
                let n = (0, h.useSubscriptionTrial)(e),
                    {
                        selectedOption: l
                    } = (0, v.default)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
                return N(e, "trialInterval", null != l ? l : null)
            }

            function V(e) {
                var t;
                let n = (0, h.useSubscriptionTrial)(e);
                return N(e, "trialLimit", null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null)
            }

            function z(e) {
                return (0, g.useEditStateStore)(t => void 0 !== t.listings[e])
            }

            function Z(e) {
                return (0, g.useEditStateStore)(t => {
                    for (let n of e)
                        if (void 0 !== t.listings[n]) return !0;
                    return !1
                })
            }

            function K(e) {
                var t, n, i, r, s;
                let o = R(e, e => null == e ? void 0 : e.subscription_plans[0]),
                    [u] = N(e, "priceTier", void 0),
                    a = l.useMemo(() => ({
                        price: null !== (t = null != u ? u : null == o ? void 0 : o.price) && void 0 !== t ? t : 0,
                        currency: null !== (n = null == o ? void 0 : o.currency) && void 0 !== n ? n : I.CurrencyCodes.USD,
                        interval: null !== (i = null == o ? void 0 : o.interval) && void 0 !== i ? i : T.SubscriptionIntervalTypes.MONTH,
                        interval_count: null !== (r = null == o ? void 0 : o.interval_count) && void 0 !== r ? r : 1,
                        id: null !== (s = null == o ? void 0 : o.id) && void 0 !== s ? s : ""
                    }), [o, u]);
                return [a]
            }

            function q(e) {
                var t;
                t = e, g.useEditStateStore.setState(e => ({
                    listings: {
                        ...e.listings,
                        [t]: e.listings.nonexistantEditStateId
                    }
                }))
            }
            async function J(e) {
                let {
                    guildId: t,
                    editStateId: n
                } = e, l = S.default.getSubscriptionListing(n);
                r(null != l, "listing doesnt exist");
                let i = l.role_id,
                    o = l.id,
                    u = g.useEditStateStore.getState().listings[n];
                r(null != u, "edit state does not exist");
                let {
                    roleColor: a,
                    roleIcon: E,
                    trialLimit: _,
                    trialInterval: h,
                    tierEmojiIds: m
                } = u;
                if (void 0 !== a || void 0 !== E) await c.default.updateRole(t, i, {
                    color: a,
                    icon: null == E ? void 0 : E.icon,
                    unicodeEmoji: null == E ? void 0 : E.unicodeEmoji
                });
                let C = S.default.getSubscriptionTrial(o);
                if ((null != _ || null != h || null != C && null == h) && await p.updateSubscriptionTrial(t, o, {
                        trial: h,
                        max_num_active_trial_users: _
                    }), void 0 !== m) {
                    let e = f.default.getGuildEmoji(t),
                        n = P(e, i),
                        l = (0, s.difference)([...m], [...n]),
                        r = (0, s.difference)([...n], [...m]),
                        o = l.map(e => f.default.getCustomEmojiById(e)).map(e => {
                            if (null != e) return (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: [...e.roles, i]
                            })
                        }),
                        u = r.map(e => f.default.getCustomEmojiById(e)).map(e => {
                            if (null == e) return;
                            let n = e.roles.filter(e => e !== i);
                            return n.length > 0 ? (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: n
                            }) : (0, d.deleteEmoji)(t, e.id)
                        });
                    await Promise.all([...o, ...u])
                }
            }
            async function X(e) {
                let {
                    guildId: t,
                    editStateId: n,
                    groupListingId: l,
                    onBeforeDispatchNewListing: i
                } = e, s = g.useEditStateStore.getState().listings[n];
                r(null != s, "edit state does not exist");
                let {
                    name: o,
                    description: u,
                    channelBenefits: a,
                    intangibleBenefits: d,
                    priceTier: c,
                    image: f,
                    channelAccessFormat: E
                } = s;
                r(null != o, "no name provided"), r(null != u, "no description provided"), r(null != c, "no priceTier provided"), r(null != f, "no image provided");
                let _ = E === g.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
                    h = l;
                if (null == h) {
                    let e = await p.createSubscriptionGroupListing(t, {});
                    h = e.id
                }
                null != a && a.length > 0 && await (0, C.createChannelsFromTemplateTierBenefits)(t, a);
                let S = [...null != a ? a : [], ...null != d ? d : []],
                    m = (0, C.getTemplateTierCreationAnalyticsContext)(n, t);
                return p.createSubscriptionListing({
                    guildId: t,
                    groupListingId: h,
                    data: {
                        can_access_all_channels: _,
                        image: f,
                        name: o,
                        description: u,
                        benefits: S,
                        priceTier: c
                    },
                    analyticsContext: m,
                    onBeforeDispatchNewListing: i
                })
            }

            function Q() {
                let [e, t] = l.useState(!1), [n, i] = l.useState(), o = l.useCallback(async e => {
                    let {
                        guildId: n,
                        editStateId: l,
                        groupListingId: o,
                        onBeforeDispatchNewListing: u,
                        onAfterDispatchNewListing: a
                    } = e, d = l, c = S.default.getSubscriptionListing(d);
                    try {
                        if (t(!0), i(void 0), null != c) r(null != o, "groupListingId is null"), await
                        function(e) {
                            var t;
                            let {
                                guildId: n,
                                editStateId: l,
                                groupListingId: i
                            } = e, o = S.default.getSubscriptionListing(l);
                            r(null != o, "listing doesnt exist");
                            let u = g.useEditStateStore.getState().listings[l];
                            r(null != u, "edit state does not exist");
                            let {
                                name: a,
                                description: d,
                                channelBenefits: c,
                                intangibleBenefits: f,
                                priceTier: E,
                                image: h,
                                channelAccessFormat: m
                            } = u, C = {};
                            if (a !== o.name && (C.name = a), d !== o.description && (C.description = d), E !== (null === (t = o.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (C.priceTier = E), null != h && (C.image = h), null != m && (C.can_access_all_channels = m === g.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != c || null != f) {
                                let e = o.role_benefits.benefits.filter(_.isChannelBenefit),
                                    t = o.role_benefits.benefits.filter(_.isIntangibleBenefit),
                                    n = [...null != c ? c : e, ...null != f ? f : t];
                                C.benefits = n
                            }
                            return (0, s.isEmpty)(C) ? o : p.updateSubscriptionListing({
                                guildId: n,
                                groupListingId: i,
                                listingId: l,
                                data: C
                            })
                        }({
                            guildId: n,
                            editStateId: d,
                            groupListingId: o
                        });
                        else {
                            var f, E;
                            let e = await X({
                                guildId: n,
                                editStateId: d,
                                groupListingId: o,
                                onBeforeDispatchNewListing: u
                            });
                            d = e.id, f = l, E = d, g.useEditStateStore.setState(e => ({
                                listings: {
                                    ...e.listings,
                                    [E]: e.listings[f],
                                    [f]: void 0
                                }
                            })), null == a || a(e)
                        }
                        return await J({
                            guildId: n,
                            editStateId: d
                        }), q(d), !0
                    } catch (e) {
                        if (!("getAnyErrorMessage" in e)) throw e;
                        i(e)
                    } finally {
                        t(!1)
                    }
                }, []);
                return {
                    loading: e,
                    error: n,
                    handleCreateOrUpdateFromEditState: o
                }
            }

            function $(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        includeSoftDeleted: !1
                    },
                    i = (0, h.useSubscriptionListingsForGroup)(e, n),
                    r = (0, g.useEditStateStore)(e => e.editStateIdsForGroup[t]),
                    s = (0, g.useEditStateStore)(e => e.setEditStateIdsForGroup),
                    u = (0, g.useEditStateStore)(e => e.setListing),
                    a = l.useMemo(() => [...i.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }), ...null != r ? r : []], [r, i]),
                    d = l.useCallback(() => {
                        let e = (0, o.v4)();
                        s(t, t => [...null != t ? t : [], e])
                    }, [t, s]),
                    c = l.useCallback(e => {
                        let n = (0, o.v4)();
                        return s(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
                            u(n, () => ({
                                name: t.name,
                                description: t.description,
                                priceTier: t.price_tier,
                                image: t.image,
                                intangibleBenefits: t.additional_perks,
                                channelBenefits: t.channels.map(e => ({
                                    ref_id: e.id,
                                    ref_type: M.GuildRoleSubscriptionBenefitTypes.CHANNEL,
                                    description: e.description,
                                    name: e.name,
                                    emoji_name: e.emoji_name
                                })),
                                roleIcon: {
                                    unicodeEmoji: void 0,
                                    icon: t.image
                                },
                                roleColor: t.role_color,
                                usedTemplate: e.category
                            }))
                        }), n
                    }, [t, s, u]),
                    f = l.useCallback(e => {
                        s(t, t => (null != t ? t : []).filter(t => t !== e))
                    }, [t, s]);
                return {
                    editStateIds: a,
                    addNewEditStateId: d,
                    addNewEditStateFromTemplate: c,
                    removeEditStateId: f
                }
            }
        },
        65722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionSettingsVisibility: function() {
                    return i
                },
                canSeeGuildRoleSubscriptionSettings: function() {
                    return E
                },
                useGuildRoleSubscriptionSettingsVisibility: function() {
                    return _
                },
                useCanManageGuildRoleSubscriptions: function() {
                    return p
                },
                canManageGuildRoleSubscriptions: function() {
                    return h
                }
            });
            var l, i, r = n("446674"),
                s = n("7331"),
                o = n("465869"),
                u = n("957255"),
                a = n("697218"),
                d = n("808388"),
                c = n("49111");
            (l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", l[l.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", l[l.VISIBLE = 3] = "VISIBLE";

            function f(e) {
                if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return i.NONE;
                if (function(e) {
                        let {
                            guild: t,
                            isOwner: n,
                            canManageGuildRoleSubscriptions: l,
                            isGuildEligibleForRoleSubscriptions: i,
                            isExpeditedMonetizationOnboardingGuild: r,
                            isUserInCreatorMonetizationEligibleCountry: s,
                            shouldRestrictUpdatingRoleSubscriptionSettings: o
                        } = e;
                        return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!l && (!o || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!i || !!r) && n && s)
                    }(e)) return i.VISIBLE;
                let {
                    guild: t,
                    isOwner: n,
                    isUserInCreatorMonetizationEligibleCountry: l,
                    isMonetizationWaitlistEnabledForGuild: r,
                    isGuildEligibleForRoleSubscriptions: s,
                    isExpeditedMonetizationOnboardingGuild: o
                } = e;
                return n && !l && r ? i.WAITLIST_ONLY : n && r && (s || o) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? i.NEEDS_COMMUNITY : i.NONE
            }

            function E(e) {
                return f(e) !== i.NONE
            }

            function _(e) {
                let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
                    n = (0, s.useIsExpeditedOnboardingGuild)(e),
                    l = (0, s.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
                    u = p(e),
                    c = (0, r.useStateFromStores)([a.default], () => {
                        let t = a.default.getCurrentUser();
                        return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
                    }),
                    E = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
                    {
                        shouldRestrictUpdatingCreatorMonetizationSettings: _
                    } = (0, o.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
                return null == e ? i.NONE : f({
                    guild: e,
                    isOwner: c,
                    canManageGuildRoleSubscriptions: u,
                    isGuildEligibleForRoleSubscriptions: t,
                    isMonetizationWaitlistEnabledForGuild: l,
                    isExpeditedMonetizationOnboardingGuild: n,
                    isUserInCreatorMonetizationEligibleCountry: E,
                    shouldRestrictUpdatingRoleSubscriptionSettings: _
                })
            }

            function p(e) {
                let t = (0, r.useStateFromStores)([u.default], () => h(e), [e]);
                return t
            }

            function h(e) {
                return null != e && u.default.can(c.Permissions.ADMINISTRATOR, e)
            }
        },
        736880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                i = n("913144"),
                r = n("233069"),
                s = n("42203");
            let o = {},
                u = {};
            class a extends l.default.Store {
                getTemplates(e) {
                    return o[e]
                }
                getTemplateWithCategory(e, t) {
                    var n;
                    return null === (n = o[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
                }
                getChannel(e) {
                    return u[e]
                }
            }
            a.displayName = "GuildRoleSubscriptionTierTemplatesStore";
            var d = new a(i.default, {
                GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
                    let {
                        selectedTemplate: t,
                        guildId: n
                    } = e, l = Object.values(s.default.getMutableGuildChannelsForGuild(n));
                    t.listings.forEach(e => {
                        e.channels.forEach(e => {
                            let t = l.find(t => t.name === e.name);
                            if (void 0 !== t) e.id = t.id;
                            else if (!(e.id in u)) {
                                let t = (0, r.createChannelRecord)(e);
                                u[e.id] = t
                            }
                        })
                    })
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
                    let {
                        templates: t,
                        guildId: n
                    } = e;
                    o[n] = t
                }
            })
        },
        432153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return S
                },
                useSuggestedUnusedPrices: function() {
                    return m
                },
                announceCreateTemplateChannels: function() {
                    return L
                },
                announceDeleteTemplateChannels: function() {
                    return v
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return A
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return g
                },
                isEligibleForNewBadge: function() {
                    return M
                }
            });
            var l = n("642852"),
                i = n.n(l),
                r = n("65597"),
                s = n("913144"),
                o = n("437140"),
                u = n("42203"),
                a = n("808388"),
                d = n("648825"),
                c = n("971150"),
                f = n("65722"),
                E = n("736880"),
                _ = n("49111"),
                p = n("724210");
            i.shim();
            let h = {};

            function S(e) {
                let t = (0, r.default)([u.default], () => u.default.getChannel(e)),
                    n = (0, r.default)([E.default], () => E.default.getChannel(e));
                return null != t ? t : n
            }

            function m(e, t, n) {
                let l = (0, r.default)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
                    i = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    s = (0, c.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let o = l.filter(e => !e.soft_deleted && !e.archived),
                    u = o.map(e => e.subscription_plans[0].price),
                    a = [];
                void 0 !== i && i.forEach(e => {
                    let t = s[e],
                        n = null == t ? void 0 : t.priceTier;
                    null != n && a.push(n)
                });
                let f = new Set(a.concat(u));
                if (!f.has(n)) return null;
                let E = t.indexOf(n);
                if (-1 === E) return null;
                let _ = [];
                for (let e = E + 1; e < t.length && (!f.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
                return _
            }

            function C(e) {
                let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = c.useEditStateStore.getState().listings,
                    l = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == i || i.forEach(e => {
                        null != E.default.getChannel(e.ref_id) && l.add(e.ref_id)
                    })
                });
                let i = [];
                for (let t of l) {
                    let n = E.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        i.push(t)
                    }
                }
                return i
            }

            function L(e) {
                let t = C(e);
                h[e] = t, t.forEach(e => {
                    let t = e.set("flags", p.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    s.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function v(e) {
                var t;
                let n = null !== (t = h[e]) && void 0 !== t ? t : C(e);
                n.forEach(e => {
                    s.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function A(e, t) {
                let n = [],
                    l = [];
                if (t.forEach(t => {
                        let i = E.default.getChannel(t.ref_id);
                        null != i && (n.push(o.default.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), l.push(i))
                    }), 0 === n.length) return;
                let i = await Promise.allSettled(n);
                i.forEach((n, i) => {
                    let r = l[i].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            l = c.useEditStateStore.getState().editStateIdsForGroup[e],
                            i = c.useEditStateStore.getState().listings;
                        null != l && l.forEach(e => {
                            var n;
                            let l = null === (n = i[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == l || l.forEach(e => {
                                e.ref_id === r && (e.ref_id = t.id)
                            })
                        })
                    } else if (null != t) {
                        let e = t.findIndex(e => e.ref_id === r);
                        if (-1 !== e) null == t || t.splice(e, 1)
                    }
                })
            }

            function g(e, t) {
                var n, l;
                let i = c.useEditStateStore.getState().listings[e],
                    r = null == i ? void 0 : i.usedTemplate;
                if (null == r) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let s = E.default.getTemplateWithCategory(t, r);
                if (null == s) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let o = s.listings[0];
                if ((null == i ? void 0 : i.name) !== o.name || (null == i ? void 0 : i.description) !== o.description || (null == i ? void 0 : i.priceTier) !== o.price_tier || (null == i ? void 0 : i.image) !== o.image || (null == i ? void 0 : i.roleColor) !== o.role_color || (null == i ? void 0 : null === (n = i.channelBenefits) || void 0 === n ? void 0 : n.length) !== o.channels.length || (null == i ? void 0 : null === (l = i.intangibleBenefits) || void 0 === l ? void 0 : l.length) !== o.additional_perks.length) return {
                    templateCategory: s.category,
                    hasChangeFromTemplate: !0
                };
                for (let e = 0; e < o.channels.length; e++) {
                    let t = i.channelBenefits[e],
                        n = o.channels[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: s.category,
                        hasChangeFromTemplate: !0
                    }
                }
                for (let e = 0; e < o.additional_perks.length; e++) {
                    let t = i.intangibleBenefits[e],
                        n = o.additional_perks[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: s.category,
                        hasChangeFromTemplate: !0
                    }
                }
                return {
                    templateCategory: s.category,
                    hasChangeFromTemplate: !1
                }
            }

            function M(e) {
                return (0, f.canManageGuildRoleSubscriptions)(e) && e.hasFeature(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id)
            }
        },
        629126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                i = n("385976"),
                r = function(e, t) {
                    return (0, l.useStateFromStores)([i.default], () => {
                        var n;
                        if (null == t) return null;
                        let l = i.default.getDisambiguatedEmojiContext(e);
                        return null !== (n = l.getById(t)) && void 0 !== n ? n : l.getByName(t)
                    }, [e, t])
                }
        },
        41391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("385976"),
                s = n("153043");
            let o = [];

            function u(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getGuildEmoji(e), [e]);
                return l.useMemo(() => null == t ? o : t.filter(t => (0, s.isRoleSubscriptionEmoji)(t, e)), [t, e])
            }
        },
        549590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("446674"),
                i = n("305961"),
                r = n("837008");

            function s(e, t) {
                let n = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                    s = (0, r.useSubscriptionListing)(t);
                return null == n || null == s ? null : n.roles[s.role_id]
            }
        },
        59767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                i = n("577357"),
                r = n("677795"),
                s = n("646718"),
                o = n("782340");

            function u(e) {
                return l.useMemo(() => {
                    var t;
                    let n = r.TIER_TRIAL_INTERVALS.map(e => ({
                            value: e,
                            label: e.interval === s.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
                                defaultLimit: (0, i.formatPlanIntervalDuration)(e)
                            }) : (0, i.formatPlanIntervalDuration)(e),
                            isDefault: e.interval === s.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
                        })),
                        l = null != e ? null === (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
                    return {
                        options: n,
                        selectedOption: l
                    }
                }, [e])
            }
        },
        833531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                i = n("42203");

            function r(e) {
                let t = (0, l.useStateFromStoresArray)([i.default], () => e.filter(e => i.default.hasChannel(e.ref_id)), [e]);
                return t
            }
        },
        484456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("430568"),
                o = n("20606"),
                u = n("629126"),
                a = n("915675"),
                d = n("6914");

            function c(e) {
                var t;
                let {
                    guildId: n,
                    emojiId: i,
                    emojiName: c,
                    className: f
                } = e, E = (0, u.default)(n, i);
                return null != E || null != c ? (0, l.jsx)(s.default, {
                    emojiId: null == E ? void 0 : E.id,
                    emojiName: null != c ? c : null == E ? void 0 : E.name,
                    animated: null !== (t = null == E ? void 0 : E.animated) && void 0 !== t && t,
                    className: r(d.emojiIcon, f)
                }) : (0, l.jsx)(a.default, {
                    className: r(d.emojiIcon, f),
                    color: o.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
                })
            }
        },
        559979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("139375"),
                s = n("419830"),
                o = n("990745"),
                u = n("449008"),
                a = n("432153"),
                d = n("677795"),
                c = n("782340"),
                f = n("856972");

            function E(e) {
                let {
                    channelId: t
                } = e, n = (0, a.useChannelWithTemplateFallback)(t);
                if (null == n) return (0, l.jsx)(l.Fragment, {
                    children: "[".concat(c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
                });
                let u = n.isMediaChannel() ? o.default : (0, s.getSimpleChannelIconComponent)(n.type);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(i.HiddenVisually, {
                        children: (0, r.default)({
                            channel: n
                        })
                    }), (0, l.jsxs)("div", {
                        "aria-hidden": !0,
                        children: [null != u && (0, l.jsx)(u, {
                            className: f.icon,
                            "aria-hidden": !0
                        }), n.name]
                    })]
                })
            }

            function _(e) {
                switch (e.ref_type) {
                    case d.GuildRoleSubscriptionBenefitTypes.CHANNEL:
                        return (0, l.jsx)(E, {
                            channelId: e.ref_id
                        });
                    case d.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
                        return e.name;
                    default:
                        (0, u.assertNever)(e)
                }
            }
        },
        246506: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("446674"),
                u = n("405645"),
                a = n("692038"),
                d = n("815297"),
                c = n("291655"),
                f = n("697218"),
                E = n("387111"),
                _ = n("439932"),
                p = n("49111"),
                h = n("782340"),
                S = n("515476");

            function m(e) {
                var t;
                let {
                    guildId: n,
                    role: r,
                    theme: m,
                    content: C = h.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
                    className: L
                } = e, v = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), A = E.default.useName(n, null, v), g = (0, u.getRoleIconProps)(r), M = i.useMemo(() => (0, a.createMessageRecord)({
                    ...(0, d.default)({
                        channelId: "0",
                        content: C,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: v
                    }),
                    state: p.MessageStates.SENT,
                    id: "0"
                }), [v, C]), I = {
                    nick: A,
                    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
                };
                return (0, l.jsx)("div", {
                    className: s((0, _.getThemeClass)(m), S.container, L),
                    children: (0, l.jsx)(c.default, {
                        hideTimestamp: !0,
                        author: I,
                        roleIcon: g,
                        message: M,
                        isGroupStart: !0,
                        disableInteraction: !0
                    })
                })
            }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return i
                }
            });
            var l = n("308503");
            let i = (0, l.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("77078"),
                i = n("244201"),
                r = n("558286"),
                s = n("49111");
            let o = "guild-event-modal";
            var u = () => {
                let e = (0, i.useAppContext)(),
                    t = e === s.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: o,
                    contextKey: t,
                    onCloseRequest: () => {
                        r.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(o, t)
                    }
                }
            }
        },
        291655: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("193865"),
                u = n("780571"),
                a = n("39331"),
                d = n("596368"),
                c = n("227439"),
                f = n("877671"),
                E = i.memo(function(e) {
                    var t, n, i;
                    let {
                        message: r,
                        channel: E,
                        compact: _,
                        className: p,
                        isGroupStart: h,
                        hideSimpleEmbedContent: S = !0,
                        disableInteraction: m
                    } = e, C = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()), L = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == E ? void 0 : E.guild_id) && void 0 !== n ? n : "", (null !== (i = r.editedTimestamp) && void 0 !== i ? i : r.timestamp).valueOf()), {
                        content: v
                    } = (0, a.default)(r, {
                        hideSimpleEmbedContent: S,
                        allowList: C.showListsAndHeaders || L.showListsAndHeaders,
                        allowHeading: C.showListsAndHeaders || L.showListsAndHeaders,
                        allowLinks: C.showMaskedLinks || L.showMaskedLinks,
                        previewLinkTarget: C.showMaskedLinks || L.showMaskedLinks
                    });
                    return (0, l.jsx)(u.default, {
                        compact: _,
                        className: s(p, {
                            [f.message]: !0,
                            [f.cozyMessage]: !_,
                            [f.groupStart]: h
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: E,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, d.default)(e, v),
                        disableInteraction: m
                    })
                })
        },
        223170: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                welcomeScreenViewed: function() {
                    return s
                },
                fetchWelcomeScreen: function() {
                    return o
                },
                resetWelcomeScreen: function() {
                    return u
                },
                clearWelcomeScreenSettings: function() {
                    return a
                },
                updateSettings: function() {
                    return d
                },
                saveWelcomeScreen: function() {
                    return c
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("49111");
            let s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    i.default.dispatch({
                        type: "WELCOME_SCREEN_VIEW",
                        guildId: e,
                        isLurking: t
                    })
                },
                o = async e => {
                    i.default.dispatch({
                        type: "WELCOME_SCREEN_FETCH_START"
                    });
                    try {
                        let t = await l.default.get({
                            url: r.Endpoints.GUILD_WELCOME_SCREEN(e),
                            oldFormErrors: !0
                        });
                        return i.default.dispatch({
                            type: "WELCOME_SCREEN_FETCH_SUCCESS",
                            guildId: e,
                            welcomeScreen: t.body
                        }), t.body
                    } catch (e) {
                        i.default.dispatch({
                            type: "WELCOME_SCREEN_FETCH_FAIL"
                        })
                    }
                }, u = () => {
                    i.default.dispatch({
                        type: "WELCOME_SCREEN_SETTINGS_RESET"
                    })
                }, a = () => {
                    i.default.dispatch({
                        type: "WELCOME_SCREEN_SETTINGS_CLEAR"
                    })
                }, d = e => {
                    i.default.dispatch({
                        type: "WELCOME_SCREEN_SETTINGS_UPDATE",
                        settings: e
                    })
                }, c = async (e, t) => {
                    i.default.dispatch({
                        type: "WELCOME_SCREEN_SUBMIT"
                    });
                    try {
                        let n = await l.default.patch({
                            url: r.Endpoints.GUILD_WELCOME_SCREEN(e),
                            body: {
                                description: t.description,
                                welcome_channels: t.channels,
                                enabled: t.enabled
                            },
                            oldFormErrors: !0
                        });
                        i.default.dispatch({
                            type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
                            guildId: e,
                            welcomeScreen: n.body
                        })
                    } catch (e) {
                        i.default.dispatch({
                            type: "WELCOME_SCREEN_SUBMIT_FAILURE"
                        })
                    }
                }
        },
        59811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NO_WELCOME_SCREEN: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var l = n("446674"),
                i = n("913144");
            let r = {},
                s = {},
                o = {},
                u = !1,
                a = !1,
                d = !1;

            function c(e) {
                let {
                    guild: t
                } = e.invite;
                return (null == t ? void 0 : t.welcome_screen) != null && (s[t.id] = t.welcome_screen, !0)
            }

            function f(e) {
                let {
                    welcomeScreen: t,
                    guildId: n
                } = e;
                s[n] = null != t ? t : r
            }
            class E extends l.default.Store {
                get(e) {
                    if (null != e) return s[e]
                }
                isFetching() {
                    return a
                }
                hasError() {
                    return d
                }
                hasSeen(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null != e && (t ? u : o[e] || !1)
                }
                isEmpty(e) {
                    if (null == e) return !0;
                    let t = s[e];
                    return null == t || 0 === t.welcome_channels.length
                }
            }
            E.displayName = "WelcomeScreenStore";
            var _ = new E(i.default, {
                INVITE_RESOLVE_SUCCESS: c,
                INVITE_ACCEPT_SUCCESS: c,
                WELCOME_SCREEN_SUBMIT_SUCCESS: f,
                WELCOME_SCREEN_UPDATE: f,
                WELCOME_SCREEN_VIEW: function(e) {
                    let {
                        guildId: t,
                        isLurking: n
                    } = e;
                    o[t] = !0, n && (u = !0)
                },
                GUILD_STOP_LURKING: function() {
                    u = !1
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    o[t] = !1
                },
                WELCOME_SCREEN_FETCH_START: function() {
                    a = !0, d = !1
                },
                WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
                    a = !1, d = !1;
                    let {
                        welcomeScreen: t,
                        guildId: n
                    } = e;
                    s[n] = null != t ? t : r
                },
                WELCOME_SCREEN_FETCH_FAIL: function() {
                    a = !1, d = !0
                }
            })
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return p
                },
                EmptyStateText: function() {
                    return h
                },
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("819855"),
                u = n("77078"),
                a = n("145131"),
                d = n("49111"),
                c = n("430098"),
                f = n("926622");
            let {
                Provider: E,
                Consumer: _
            } = i.createContext(d.ThemeTypes.DARK);
            class p extends i.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: i,
                        offsetX: r,
                        offsetY: u,
                        style: d
                    } = this.props;
                    return (0, l.jsx)(_, {
                        children: E => (0, l.jsx)(a.default.Child, {
                            grow: 0,
                            className: s(c.image, f.marginBottom40),
                            style: {
                                ...d,
                                width: n,
                                height: i,
                                marginLeft: r,
                                marginTop: u,
                                backgroundImage: "url(".concat((0, o.isThemeDark)(E) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let h = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: i,
                    note: r,
                    style: o
                } = e;
                return (0, l.jsxs)(a.default.Child, {
                    grow: 0,
                    direction: a.default.Direction.VERTICAL,
                    style: o,
                    children: [null != t && (0, l.jsx)(u.H, {
                        className: s(n, c.title),
                        children: t
                    }), null != r ? (0, l.jsx)("div", {
                        className: s(i, c.text, f.marginTop8),
                        children: r
                    }) : null]
                })
            };
            class S extends i.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: i
                    } = this.props;
                    return (0, l.jsx)(E, {
                        value: t,
                        children: (0, l.jsx)(a.default, {
                            direction: a.default.Direction.VERTICAL,
                            align: a.default.Align.CENTER,
                            justify: a.default.Justify.CENTER,
                            className: s(c.wrapper, n),
                            style: i,
                            children: e
                        })
                    })
                }
            }
            S.Text = h, S.Image = p
        },
        6466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QuickSelectPopout: function() {
                    return _
                },
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("974667"),
                u = n("77078"),
                a = n("145131"),
                d = n("476765"),
                c = n("79808");
            class f extends i.PureComponent {
                render() {
                    let {
                        label: e,
                        value: t,
                        renderValue: n,
                        className: i
                    } = this.props;
                    return (0, l.jsxs)(a.default, {
                        className: s(c.quickSelect, i),
                        align: a.default.Align.CENTER,
                        children: [(0, l.jsx)("div", {
                            className: c.quickSelectLabel,
                            children: e
                        }), (0, l.jsxs)(a.default, {
                            align: a.default.Align.CENTER,
                            className: c.quickSelectClick,
                            children: [(0, l.jsx)("div", {
                                className: c.quickSelectValue,
                                children: null != n ? n(t) : t.label
                            }), (0, l.jsx)("div", {
                                className: c.quickSelectArrow
                            })]
                        })]
                    })
                }
            }
            class E extends i.PureComponent {
                render() {
                    let {
                        selected: e,
                        renderOption: t,
                        option: n
                    } = this.props;
                    return (0, l.jsx)(o.ListNavigatorItem, {
                        id: n.key,
                        children: i => (0, l.jsx)(u.Clickable, {
                            focusProps: {
                                enabled: !1
                            },
                            className: s(c.quickSelectPopoutOption, {
                                selected: e
                            }),
                            onClick: this.handleClick,
                            ...i,
                            role: "option",
                            children: t(n, e)
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        let {
                            option: e,
                            onChange: t
                        } = this.props;
                        null == t || t(e)
                    }
                }
            }

            function _(e) {
                let {
                    options: t,
                    value: n,
                    scroller: i,
                    renderOption: r,
                    onChange: a,
                    className: f
                } = e, _ = s(c.quickSelectPopout, f, {
                    [c.quickSelectPopoutScroll]: i
                }), p = t.map(e => {
                    let t = null != n && e.value === n.value;
                    return (0, l.jsx)(E, {
                        className: c.quickSelectPopoutOption,
                        renderOption: r,
                        option: e,
                        onChange: t ? void 0 : a,
                        selected: t
                    }, e.key || e.value)
                }), h = (0, d.useUID)(), S = (0, o.default)({
                    id: h,
                    isEnabled: !0,
                    wrap: !0,
                    async scrollToStart() {},
                    async scrollToEnd() {}
                }), {
                    ref: m,
                    ...C
                } = S.containerProps;
                return (0, u.useFocusLock)(m), (0, l.jsx)(o.ListNavigatorProvider, {
                    navigator: S,
                    children: (0, l.jsx)("div", {
                        ref: m,
                        className: _,
                        ...C,
                        role: "listbox",
                        children: i ? (0, l.jsx)(u.Scroller, {
                            className: c.quickSelectScroller,
                            children: p
                        }) : p
                    })
                })
            }
            var p = f
        },
        230559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("597755"),
                s = n.n(r),
                o = n("458960"),
                u = n("904160");

            function a(e) {
                let t = e => e.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0px", "1px"]
                });
                return {
                    transform: [{
                        translateX: t(e.x)
                    }, {
                        translateY: t(e.y)
                    }]
                }
            }
            class d extends i.Component {
                componentDidMount() {
                    this._isMounted = !0;
                    let {
                        x: e,
                        y: t
                    } = this.state;
                    "Firefox" !== s.name && (o.default.animate(e, {
                        loop: !0,
                        toValueMin: -74,
                        toValueMax: 95,
                        overshootClamping: !0,
                        friction: 5,
                        tension: 1,
                        shouldLoop: this.shouldLoop
                    }), o.default.animate(t, {
                        loop: !0,
                        toValueMin: -59,
                        toValueMax: 75,
                        overshootClamping: !0,
                        friction: 5,
                        tension: 1,
                        shouldLoop: this.shouldLoop
                    }))
                }
                componentWillUnmount() {
                    this._isMounted = !1
                }
                render() {
                    return (0, l.jsxs)("div", {
                        className: u.searchIndexAnimation,
                        children: [(0, l.jsx)("div", {
                            className: u.searchIndexBackground
                        }), (0, l.jsxs)("svg", {
                            className: u.searchIndexForeground,
                            width: "320",
                            height: "280",
                            children: [(0, l.jsx)("defs", {
                                children: (0, l.jsx)("rect", {
                                    id: "search-index-foreground-mask-a",
                                    width: "80",
                                    height: "80",
                                    rx: "40"
                                })
                            }), (0, l.jsxs)("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [(0, l.jsxs)("g", {
                                    transform: "translate(120 80)",
                                    children: [(0, l.jsx)("mask", {
                                        id: "search-index-foreground-mask-b",
                                        fill: "#fff",
                                        children: (0, l.jsx)(o.default.use, {
                                            style: a(this.state),
                                            className: u.mask,
                                            xlinkHref: "#search-index-foreground-mask-a"
                                        })
                                    }), (0, l.jsxs)("g", {
                                        mask: "url(#search-index-foreground-mask-b)",
                                        children: [(0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-15.0267 170.8361c0 6.311-5.116 11.427-11.428 11.427-6.31 0-11.426-5.116-11.426-11.427s5.116-11.427 11.426-11.427c6.312 0 11.428 5.116 11.428 11.427z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-12.39 165.5622c-6.311 0-11.427-5.116-11.427-11.427s5.116-11.427 11.427-11.427 11.427 5.116 11.427 11.427c0 2.727-.955 5.231-2.55 7.196",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-23.8168 129.5232c6.311 0 11.427 5.116 11.427 11.427s-5.116 11.427-11.427 11.427c-6.312 0-11.427-5.116-11.427-11.427",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFD773",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M110.2125-35.5789c.556 6.286-4.089 11.833-10.375 12.39-6.287.556-11.834-4.089-12.391-10.375-.555-6.286 4.089-11.834 10.376-12.39",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#C2FFF9",
                                            d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671zm-18.6982 25.5654l33.402-19.788",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-93.1889 132.2868l23.272 20.241-6.571-30.135",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#C2FFF9",
                                            d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M135.6949-69.0003l-.625 26.692 16.447-21.032m-27.3679 1.6701l31.645 11.319",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532"
                                        }), (0, l.jsx)("path", {
                                            fill: "#7687B2",
                                            d: "M45.3502-64.8382c-.602-2.453-3.078-3.954-5.532-3.353l-102.171 25.056c-2.454.601-3.954 3.078-3.353 5.531l3.489 14.228 111.056-27.234-3.489-14.228z"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532zM-62.2172-23.3763l111.057-27.234m-95.9164 3.7287l-8.367 21.844m30.0096-27.1517l-8.366 21.844m30.0096-27.1516l-8.366 21.844M17.8522-62.804L9.4862-40.96m30.0095-27.1516l-8.366 21.844",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FF7B78",
                                            d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z"
                                        }), (0, l.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z"
                                        }), (0, l.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#5871B7",
                                            d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123zM64.1588 1.2805h-43.147m21.5738-8.1114h-21.574m91.3894 0H49.816m33.9815-8.1118h-62.786",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055"
                                        }), (0, l.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#5865f2",
                                            d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-26.3637 22.2653h48.67M6.0826 30.3767h68.309m-100.7553 0h22.799m53.1942 8.1118h14.942m-24.3346 0h4.534m-71.1346 0h54.093m-54.093 8.1113h63.186",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#98AFED",
                                            d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-60.6225 77.6657h99.433m-23.4398 8.1114h7.949m-19.6892 0h-64.253m0 8.1118h47.398m-47.398 8.1113h116.122",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#E4E9F8",
                                            d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574"
                                        }), (0, l.jsx)("path", {
                                            fill: "#7687B2",
                                            d: "M42.4547-33.7181v-14.743c0-2.527-2.048-4.574-4.574-4.574h-105.198c-2.527 0-4.575 2.047-4.575 4.574v14.743h114.347z"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574zM-71.892-33.8123H42.455m-94.0442-19.2231l-13.328 19.223m35.6121-19.223l-13.328 19.223m35.6132-19.223l-13.328 19.223m35.6122-19.223l-13.328 19.223m35.6121-19.223l-13.328 19.223",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FF7B78",
                                            d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                            fill: "#FFF",
                                            d: "M-26.6293-25.6136v33.584l31.445-16.792"
                                        }), (0, l.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M-26.6293-25.6136v33.584l31.445-16.792zM184.3375 8.3772v6.43m3.2149-3.2152h-6.43m-292.9079 79.082v6.43m3.2148-3.2151h-6.43M195.901-43.6692l-1.516 1.515m-6.0611 6.0621l-1.516 1.516m9.0931-.0004l-1.516-1.516m-6.0611-6.0616l-1.516-1.515M-88.642 168.9265l-1.516 1.516m-6.0621 6.0616l-1.516 1.515m9.0941.0001l-1.516-1.515m-6.0621-6.0621l-1.516-1.516M174.3463-8.8211c0 1.775-1.439 3.215-3.215 3.215-1.776 0-3.215-1.44-3.215-3.215s1.439-3.215 3.215-3.215c1.776 0 3.215 1.44 3.215 3.215z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    })]
                                }), (0, l.jsxs)(o.default.g, {
                                    className: u.magnifyingGlass,
                                    style: a(this.state),
                                    children: [(0, l.jsx)("path", {
                                        fill: "#C9D2F0",
                                        d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0"
                                    }), (0, l.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                        fill: "#9F7373",
                                        d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0"
                                    }), (0, l.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                        fill: "#F3F9FF",
                                        d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0m63.895-63.895c-19.667-19.667-51.554-19.667-71.221 0s-19.667 51.554 0 71.221 51.554 19.667 71.221 0 19.667-51.554 0-71.221"
                                    }), (0, l.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M196.0069 155.9708c-19.667 19.667-51.554 19.667-71.221 0s-19.667-51.554 0-71.221 51.554-19.667 71.221 0 19.667 51.554 0 71.221z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                        stroke: "#1E2126",
                                        strokeWidth: "2",
                                        d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                        d: "M84 66h130v130H84z"
                                    })]
                                })]
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        x: new o.default.Value(0),
                        y: new o.default.Value(0)
                    }, this._isMounted = !1, this.shouldLoop = () => this._isMounted
                }
            }
            var c = d
        },
        530346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("804090"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.75 0.5L15.5 6.5V8L11.751 11.751H10.25L3.5 5.75V4.25L7.25 0.5H8.75ZM12.2803 1.03033C12.5732 0.737437 13.0458 0.735124 13.346 1.0353L14.3967 2.08602C14.6923 2.38166 14.6966 2.85672 14.4017 3.15165C14.1088 3.44454 13.6362 3.44686 13.336 3.14668L12.2853 2.09596C11.9897 1.80032 11.9854 1.32527 12.2803 1.03033V1.03033ZM5.27297 8.75L6.86396 10.341L2.09099 15.114L0.5 13.523L5.27297 8.75Z",
                            fill: i
                        })
                    })
                }, r.HammerIcon)
        },
        4845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("167338"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                            fill: i,
                            className: r
                        })
                    })
                }, r.ChatAlertIcon)
        },
        556081: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("495137"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            d: "M12.0002 10.823L20.9652 5.26C20.6772 5.1 20.3522 5 20.0002 5H4.00016C3.64816 5 3.32216 5.1 3.03516 5.26L12.0002 10.823Z",
                            fill: i,
                            className: r
                        }), (0, l.jsx)("path", {
                            d: "M12.527 12.8489C12.366 12.9489 12.183 12.9999 12 12.9999C11.817 12.9999 11.634 12.9489 11.473 12.8499L2.003 6.97292C2.003 6.98192 2 6.99092 2 6.99892V15.9989C2 17.1009 2.897 17.9989 4 17.9989H20C21.103 17.9989 22 17.1009 22 15.9989V6.99892C22 6.98992 21.997 6.98092 21.997 6.97192L12.527 12.8489Z",
                            fill: i,
                            className: r
                        })]
                    })
                }, r.EnvelopeIcon)
        },
        216947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("185020"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                fill: i,
                                d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                            })
                        })
                    })
                }, r.MobilePhoneIcon)
        }
    }
]);
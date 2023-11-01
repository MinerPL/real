(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68685"], {
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
                    return E
                }
            });
            var i = n("759843"),
                l = n("627929"),
                r = n("913144"),
                u = n("81732"),
                a = n("282109"),
                s = n("840707"),
                o = n("519705"),
                d = n("49111"),
                c = n("397336"),
                E = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: E,
                            permissionOverwrites: f = [],
                            bitrate: _,
                            userLimit: S,
                            parentId: A,
                            skuId: C,
                            branchId: T
                        } = e;
                        r.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let p = {
                            type: n,
                            name: E,
                            permission_overwrites: f
                        };
                        if (null != _ && _ !== d.BITRATE_DEFAULT && (p.bitrate = _), null != S && S > 0 && (p.user_limit = S), null != A && (p.parent_id = A), n === d.ChannelTypes.GUILD_STORE) {
                            if (null == C) throw Error("Unexpected missing SKU");
                            p.sku_id = C, p.branch_id = T
                        }
                        return s.default.post({
                            url: d.Endpoints.GUILD_CHANNELS(t),
                            body: p,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, l.exact)({
                                        is_private: f.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (a.default.isOptInEnabled(t) && o.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), u.default.checkGuildTemplateDirty(t), e), e => {
                            throw r.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, r) => s.default.post({
                        url: d.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: r
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, l.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
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
            var i = n("233069"),
                l = n("27618"),
                r = n("697218"),
                u = n("679653"),
                a = n("49111"),
                s = n("782340");

            function o(e) {
                let {
                    isSubscriptionGated: t,
                    needSubscriptionToAccess: n
                } = e;
                if (t) return n ? s.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : s.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
            }

            function d(e) {
                let t, {
                        channel: n,
                        unread: d = !1,
                        mentionCount: c = 0,
                        userCount: E,
                        embeddedActivitiesCount: f,
                        isSubscriptionGated: _,
                        needSubscriptionToAccess: S
                    } = e,
                    A = (0, u.computeChannelName)(n, r.default, l.default);
                switch (n.type) {
                    case a.ChannelTypes.DM:
                        t = d ? s.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : s.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GROUP_DM:
                        t = d ? s.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : s.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_STORE:
                        t = s.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_DIRECTORY:
                        t = s.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_ANNOUNCEMENT:
                        t = c > 0 ? s.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? s.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : s.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_VOICE:
                        let C = [s.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
                            channelName: n.name
                        })];
                        if (c > 0 && C.push(s.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
                                mentionCount: c
                            })), d && C.push(s.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != E) {
                            let e = n.userLimit;
                            null != e && e > 0 ? C.push(s.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                                userCount: E,
                                limit: e
                            })) : C.push(s.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
                                userCount: E
                            }))
                        }
                        null != f && f > 0 && C.push(s.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
                            activitiesCount: f
                        }));
                        let T = o({
                            isSubscriptionGated: _,
                            needSubscriptionToAccess: S
                        });
                        return null != T && C.push(T), C.join(", ");
                    case a.ChannelTypes.GUILD_STAGE_VOICE:
                        t = s.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
                        break;
                    default:
                        t = i.THREAD_CHANNEL_TYPES.has(n.type) ? c > 0 ? s.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : d ? s.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : s.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : c > 0 ? s.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? s.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : s.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
                }
                let p = [t.format({
                        channelName: A,
                        mentionCount: c
                    })],
                    I = o({
                        isSubscriptionGated: _,
                        needSubscriptionToAccess: S
                    });
                return null != I && p.push(I), p.join(", ")
            }
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return S
                },
                MemberSafetyFlagType: function() {
                    return r
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return A
                },
                ModerationActionType: function() {
                    return u
                },
                useTrackModerationAction: function() {
                    return C
                }
            });
            var i, l, r, u, a = n("884691"),
                s = n("812204"),
                o = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function f(e, t, n) {
                var i;
                let l = {
                    ...t,
                    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(e, l)
            }

            function _(e) {
                let t = a.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function S(e) {
                let t = a.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function A(e) {
                let t = a.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function C(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: l
                } = t, r = a.useCallback(t => {
                    let r = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != l ? l : void 0
                    };
                    f(E.AnalyticEvents.MODERATION_ACTION, r)
                }, [e, n, i, l]);
                return r
            }(l = u || (u = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"
        },
        998940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
                    return a
                },
                MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
                    return s
                },
                MembersTableDateFormats: function() {
                    return l
                },
                formatDateRelativeTime: function() {
                    return c
                }
            });
            var i, l, r = n("319126"),
                u = n("782340");
            let a = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                },
                s = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                };
            (i = l || (l = {}))[i.JOINED_AT = 0] = "JOINED_AT", i[i.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
            let o = () => ({
                    seconds: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
                    minutes: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
                    hours: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
                    days: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
                    months: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
                    years: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
                }),
                d = () => ({
                    hours: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
                    days: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
                    months: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
                    years: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => {
                    var n;
                    let i = (n = t) === l.JOINED_AT ? o : n === l.ACCOUNT_AGE ? d : void 0;
                    return (0, r.default)(e, i, !1)
                }
        },
        553275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useContextMenuModerateRoles: function() {
                    return f
                },
                openMemberProfile: function() {
                    return _
                },
                useContextMenuModerateUser: function() {
                    return S
                },
                useHighestRole: function() {
                    return A
                },
                SearchState: function() {
                    return l
                },
                getSearchState: function() {
                    return C
                }
            });
            var i, l, r = n("884691"),
                u = n("65597"),
                a = n("685665"),
                s = n("401642"),
                o = n("305961"),
                d = n("697218"),
                c = n("441823"),
                E = n("49111");

            function f(e, t) {
                let {
                    analyticsLocations: n
                } = (0, a.default)();
                return r.useCallback(i => {
                    if (null == e) return;
                    let l = d.default.getUser(e.userId);
                    null != l && (i.stopPropagation(), (0, c.openModerateRoleContextMenu)(i, {
                        user: l,
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
                (0, s.openUserProfileModal)({
                    userId: n,
                    guildId: t,
                    analyticsLocation: {
                        section: E.AnalyticsSections.MEMBER_SAFETY_PAGE,
                        object: E.AnalyticsObjects.ACTIONED_BY_USER
                    }
                })
            };

            function S(e, t) {
                let {
                    analyticsLocations: n
                } = (0, a.default)();
                return r.useCallback(i => {
                    if (null == e) return;
                    let l = d.default.getUser(e.userId);
                    null != l && (i.stopPropagation(), (0, c.openModerateUserContextMenu)(i, {
                        user: l,
                        guildId: e.guildId,
                        analyticsLocations: n,
                        onCloseContextMenu: t
                    }))
                }, [e, t, n])
            }

            function A(e) {
                return (0, u.default)([o.default], () => {
                    var t;
                    if (null == e) return null;
                    let n = o.default.getGuild(e.guildId);
                    return null == n || null == e.highestRoleId ? null : null !== (t = n.roles[e.highestRoleId]) && void 0 !== t ? t : null
                }, [e])
            }

            function C(e, t, n) {
                return t ? l.LOADING : e ? l.SUCCESS_STILL_INDEXING : n <= 0 ? l.SUCCESS_EMPTY : l.SUCCESS_FULL
            }(i = l || (l = {}))[i.LOADING = 0] = "LOADING", i[i.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", i[i.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", i[i.SUCCESS_FULL = 3] = "SUCCESS_FULL"
        },
        412013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("77078"),
                u = n("581583"),
                a = n("843455");

            function s(e) {
                var t;
                let {
                    guildId: n,
                    role: s,
                    className: o
                } = e, d = (0, r.useToken)(r.tokens.unsafe_rawColors.PRIMARY_300).hex(), c = null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : d, E = l.useMemo(() => ({
                    backgroundColor: "".concat(c, "27")
                }), [c]);
                return null == s ? null : (0, i.jsx)(u.MemberRole, {
                    className: o,
                    style: E,
                    role: s,
                    guildId: n,
                    canRemove: !1,
                    onRemove: a.NOOP
                })
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return u
                },
                formatPlanInterval: function() {
                    return a
                },
                formatPlanIntervalDuration: function() {
                    return s
                },
                isChannelBenefit: function() {
                    return o
                },
                isIntangibleBenefit: function() {
                    return d
                }
            });
            var i = n("677795"),
                l = n("646718"),
                r = n("782340");

            function u(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function a(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case l.SubscriptionIntervalTypes.DAY:
                            return r.default.Messages.DAY;
                        case l.SubscriptionIntervalTypes.MONTH:
                            return r.default.Messages.MONTH;
                        case l.SubscriptionIntervalTypes.YEAR:
                            return r.default.Messages.YEAR
                    }
                })(t).format({
                    count: n
                })
            }

            function s(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                switch (t) {
                    case l.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return r.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return r.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case l.SubscriptionIntervalTypes.MONTH:
                        return r.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case l.SubscriptionIntervalTypes.YEAR:
                        return r.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function o(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function d(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        679027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_PREVIEW_ROLE: function() {
                    return l
                }
            });
            var i = n("49111");
            let l = {
                id: "0",
                name: "",
                mentionable: !1,
                position: 0,
                hoist: !1,
                permissions: i.Permissions.SEND_MESSAGES,
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
                    return l
                },
                useEditStateStore: function() {
                    return u
                }
            });
            var i, l, r = n("308503");
            (i = l || (l = {}))[i.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", i[i.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS";
            let u = (0, r.default)(e => ({
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
                    return O
                },
                usePriceTier: function() {
                    return D
                },
                useDescription: function() {
                    return U
                },
                useImage: function() {
                    return y
                },
                useRoleIcon: function() {
                    return b
                },
                useRole: function() {
                    return B
                },
                useRoleColor: function() {
                    return G
                },
                useChannelAccessFormat: function() {
                    return F
                },
                useChannelBenefits: function() {
                    return P
                },
                useIntangibleBenefits: function() {
                    return w
                },
                useTierEmojiIds: function() {
                    return W
                },
                useTrialInterval: function() {
                    return x
                },
                useTrialLimit: function() {
                    return V
                },
                useHasChanges: function() {
                    return K
                },
                useHasChangesForEditStateIds: function() {
                    return J
                },
                useSubscriptionPlan: function() {
                    return Z
                },
                clearEditState: function() {
                    return z
                },
                useCreateOrUpdateListingFromEditState: function() {
                    return Q
                },
                useEditStateIds: function() {
                    return $
                }
            });
            var i = n("884691"),
                l = n("627445"),
                r = n.n(l),
                u = n("917351"),
                a = n("748820"),
                s = n("509043"),
                o = n("446674"),
                d = n("150021"),
                c = n("851387"),
                E = n("385976"),
                f = n("271560"),
                _ = n("577357"),
                S = n("371358"),
                A = n("837008"),
                C = n("648825"),
                T = n("866595"),
                p = n("432153"),
                I = n("549590"),
                L = n("59767"),
                g = n("679027"),
                m = n("971150"),
                N = n("677795"),
                v = n("49111"),
                M = n("646718");

            function h(e, t, n) {
                let l = (0, m.useEditStateStore)(e => e.setListing),
                    r = i.useCallback(i => {
                        l(e, e => {
                            var l;
                            let r = null !== (l = null == e ? void 0 : e[t]) && void 0 !== l ? l : n,
                                u = "function" == typeof i ? i(r) : i;
                            return Object.assign({}, e, {
                                [t]: u
                            })
                        })
                    }, [l, e, t, n]),
                    u = (0, m.useEditStateStore)(n => {
                        var i;
                        return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t]
                    }),
                    a = void 0 !== u ? u : n;
                return [a, r]
            }

            function R(e, t) {
                let n = (0, o.useStateFromStores)([C.default], () => C.default.getSubscriptionListing(e));
                return i.useMemo(() => t(n), [n])
            }

            function O(e) {
                var t;
                let n = R(e, e => null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "");
                return h(e, "name", n)
            }

            function D(e) {
                let t = R(e, e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
                });
                return h(e, "priceTier", t)
            }

            function U(e) {
                var t;
                let n = R(e, e => null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : "");
                return h(e, "description", n)
            }

            function y(e, t) {
                let n = R(e, e => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, f.getAssetURL)(e.application_id, e.image_asset, t)
                });
                return h(e, "image", n)
            }

            function b(e, t) {
                var n, l;
                let r = (0, I.default)(t, e),
                    u = i.useMemo(() => ({
                        icon: null !== (n = null == r ? void 0 : r.icon) && void 0 !== n ? n : void 0,
                        unicodeEmoji: null !== (l = null == r ? void 0 : r.unicodeEmoji) && void 0 !== l ? l : void 0
                    }), [r]);
                return h(e, "roleIcon", u)
            }

            function B(e, t) {
                let n = (0, I.default)(t, e),
                    l = (0, m.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor
                    }),
                    r = (0, m.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon
                    });
                return i.useMemo(() => {
                    let e = {
                        ...null != n ? n : g.DEFAULT_PREVIEW_ROLE
                    };
                    if (void 0 !== r) {
                        var t, i;
                        e.icon = null !== (t = r.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (i = r.unicodeEmoji) && void 0 !== i ? i : ""
                    }
                    return void 0 !== l && (e.color = l, e.colorString = (0, s.int2hex)(l)), e
                }, [n, r, l])
            }

            function G(e, t) {
                var n;
                let l = (0, I.default)(t, e),
                    r = i.useMemo(() => null !== (n = null == l ? void 0 : l.color) && void 0 !== n ? n : v.DEFAULT_ROLE_COLOR, [l]);
                return h(e, "roleColor", r)
            }

            function F(e, t) {
                let n = (0, I.default)(t, e),
                    l = i.useMemo(() => null == n ? m.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, T.isAllChannelsRole)(n) ? m.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : m.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [n]);
                return h(e, "channelAccessFormat", l)
            }
            let H = [];

            function P(e) {
                let t = R(e, e => null == e ? H : e.role_benefits.benefits.filter(_.isChannelBenefit));
                return h(e, "channelBenefits", t)
            }
            let Y = [];

            function w(e) {
                let t = R(e, e => null == e ? Y : e.role_benefits.benefits.filter(_.isIntangibleBenefit));
                return h(e, "intangibleBenefits", t)
            }
            let k = new Set;

            function j(e, t) {
                if (0 === e.length) return k;
                let n = e.filter(e => e.roles.includes(t));
                return new Set(n.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }

            function W(e, t) {
                let n = (0, I.default)(t, e),
                    l = (0, o.useStateFromStoresArray)([E.default], () => E.default.getGuildEmoji(t), [t]),
                    r = i.useMemo(() => null == n ? k : j(l, n.id), [l, n]);
                return h(e, "tierEmojiIds", r)
            }

            function x(e) {
                var t;
                let n = (0, A.useSubscriptionTrial)(e),
                    {
                        selectedOption: i
                    } = (0, L.default)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
                return h(e, "trialInterval", null != i ? i : null)
            }

            function V(e) {
                var t;
                let n = (0, A.useSubscriptionTrial)(e);
                return h(e, "trialLimit", null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null)
            }

            function K(e) {
                return (0, m.useEditStateStore)(t => void 0 !== t.listings[e])
            }

            function J(e) {
                return (0, m.useEditStateStore)(t => {
                    for (let n of e)
                        if (void 0 !== t.listings[n]) return !0;
                    return !1
                })
            }

            function Z(e) {
                var t, n, l, r, u;
                let a = R(e, e => null == e ? void 0 : e.subscription_plans[0]),
                    [s] = h(e, "priceTier", void 0),
                    o = i.useMemo(() => ({
                        price: null !== (t = null != s ? s : null == a ? void 0 : a.price) && void 0 !== t ? t : 0,
                        currency: null !== (n = null == a ? void 0 : a.currency) && void 0 !== n ? n : v.CurrencyCodes.USD,
                        interval: null !== (l = null == a ? void 0 : a.interval) && void 0 !== l ? l : M.SubscriptionIntervalTypes.MONTH,
                        interval_count: null !== (r = null == a ? void 0 : a.interval_count) && void 0 !== r ? r : 1,
                        id: null !== (u = null == a ? void 0 : a.id) && void 0 !== u ? u : ""
                    }), [a, s]);
                return [o]
            }

            function z(e) {
                var t;
                t = e, m.useEditStateStore.setState(e => ({
                    listings: {
                        ...e.listings,
                        [t]: e.listings.nonexistantEditStateId
                    }
                }))
            }
            async function X(e) {
                let {
                    guildId: t,
                    editStateId: n
                } = e, i = C.default.getSubscriptionListing(n);
                r(null != i, "listing doesnt exist");
                let l = i.role_id,
                    a = i.id,
                    s = m.useEditStateStore.getState().listings[n];
                r(null != s, "edit state does not exist");
                let {
                    roleColor: o,
                    roleIcon: f,
                    trialLimit: _,
                    trialInterval: A,
                    tierEmojiIds: T
                } = s;
                if (void 0 !== o || void 0 !== f) await c.default.updateRole(t, l, {
                    color: o,
                    icon: null == f ? void 0 : f.icon,
                    unicodeEmoji: null == f ? void 0 : f.unicodeEmoji
                });
                let p = C.default.getSubscriptionTrial(a);
                if ((null != _ || null != A || null != p && null == A) && await S.updateSubscriptionTrial(t, a, {
                        trial: A,
                        max_num_active_trial_users: _
                    }), void 0 !== T) {
                    let e = E.default.getGuildEmoji(t),
                        n = j(e, l),
                        i = (0, u.difference)([...T], [...n]),
                        r = (0, u.difference)([...n], [...T]),
                        a = i.map(e => E.default.getCustomEmojiById(e)).map(e => {
                            if (null != e) return (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: [...e.roles, l]
                            })
                        }),
                        s = r.map(e => E.default.getCustomEmojiById(e)).map(e => {
                            if (null == e) return;
                            let n = e.roles.filter(e => e !== l);
                            return n.length > 0 ? (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: n
                            }) : (0, d.deleteEmoji)(t, e.id)
                        });
                    await Promise.all([...a, ...s])
                }
            }
            async function q(e) {
                let {
                    guildId: t,
                    editStateId: n,
                    groupListingId: i,
                    onBeforeDispatchNewListing: l
                } = e, u = m.useEditStateStore.getState().listings[n];
                r(null != u, "edit state does not exist");
                let {
                    name: a,
                    description: s,
                    channelBenefits: o,
                    intangibleBenefits: d,
                    priceTier: c,
                    image: E,
                    channelAccessFormat: f
                } = u;
                r(null != a, "no name provided"), r(null != s, "no description provided"), r(null != c, "no priceTier provided"), r(null != E, "no image provided");
                let _ = f === m.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
                    A = i;
                if (null == A) {
                    let e = await S.createSubscriptionGroupListing(t, {});
                    A = e.id
                }
                null != o && o.length > 0 && await (0, p.createChannelsFromTemplateTierBenefits)(t, o);
                let C = [...null != o ? o : [], ...null != d ? d : []],
                    T = (0, p.getTemplateTierCreationAnalyticsContext)(n, t);
                return S.createSubscriptionListing({
                    guildId: t,
                    groupListingId: A,
                    data: {
                        can_access_all_channels: _,
                        image: E,
                        name: a,
                        description: s,
                        benefits: C,
                        priceTier: c
                    },
                    analyticsContext: T,
                    onBeforeDispatchNewListing: l
                })
            }

            function Q() {
                let [e, t] = i.useState(!1), [n, l] = i.useState(), a = i.useCallback(async e => {
                    let {
                        guildId: n,
                        editStateId: i,
                        groupListingId: a,
                        onBeforeDispatchNewListing: s,
                        onAfterDispatchNewListing: o
                    } = e, d = i, c = C.default.getSubscriptionListing(d);
                    try {
                        if (t(!0), l(void 0), null != c) r(null != a, "groupListingId is null"), await
                        function(e) {
                            var t;
                            let {
                                guildId: n,
                                editStateId: i,
                                groupListingId: l
                            } = e, a = C.default.getSubscriptionListing(i);
                            r(null != a, "listing doesnt exist");
                            let s = m.useEditStateStore.getState().listings[i];
                            r(null != s, "edit state does not exist");
                            let {
                                name: o,
                                description: d,
                                channelBenefits: c,
                                intangibleBenefits: E,
                                priceTier: f,
                                image: A,
                                channelAccessFormat: T
                            } = s, p = {};
                            if (o !== a.name && (p.name = o), d !== a.description && (p.description = d), f !== (null === (t = a.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (p.priceTier = f), null != A && (p.image = A), null != T && (p.can_access_all_channels = T === m.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != c || null != E) {
                                let e = a.role_benefits.benefits.filter(_.isChannelBenefit),
                                    t = a.role_benefits.benefits.filter(_.isIntangibleBenefit),
                                    n = [...null != c ? c : e, ...null != E ? E : t];
                                p.benefits = n
                            }
                            return (0, u.isEmpty)(p) ? a : S.updateSubscriptionListing({
                                guildId: n,
                                groupListingId: l,
                                listingId: i,
                                data: p
                            })
                        }({
                            guildId: n,
                            editStateId: d,
                            groupListingId: a
                        });
                        else {
                            var E, f;
                            let e = await q({
                                guildId: n,
                                editStateId: d,
                                groupListingId: a,
                                onBeforeDispatchNewListing: s
                            });
                            d = e.id, E = i, f = d, m.useEditStateStore.setState(e => ({
                                listings: {
                                    ...e.listings,
                                    [f]: e.listings[E],
                                    [E]: void 0
                                }
                            })), null == o || o(e)
                        }
                        return await X({
                            guildId: n,
                            editStateId: d
                        }), z(d), !0
                    } catch (e) {
                        if (!("getAnyErrorMessage" in e)) throw e;
                        l(e)
                    } finally {
                        t(!1)
                    }
                }, []);
                return {
                    loading: e,
                    error: n,
                    handleCreateOrUpdateFromEditState: a
                }
            }

            function $(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        includeSoftDeleted: !1
                    },
                    l = (0, A.useSubscriptionListingsForGroup)(e, n),
                    r = (0, m.useEditStateStore)(e => e.editStateIdsForGroup[t]),
                    u = (0, m.useEditStateStore)(e => e.setEditStateIdsForGroup),
                    s = (0, m.useEditStateStore)(e => e.setListing),
                    o = i.useMemo(() => [...l.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }), ...null != r ? r : []], [r, l]),
                    d = i.useCallback(() => {
                        let e = (0, a.v4)();
                        u(t, t => [...null != t ? t : [], e])
                    }, [t, u]),
                    c = i.useCallback(e => {
                        let n = (0, a.v4)();
                        return u(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
                            s(n, () => ({
                                name: t.name,
                                description: t.description,
                                priceTier: t.price_tier,
                                image: t.image,
                                intangibleBenefits: t.additional_perks,
                                channelBenefits: t.channels.map(e => ({
                                    ref_id: e.id,
                                    ref_type: N.GuildRoleSubscriptionBenefitTypes.CHANNEL,
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
                    }, [t, u, s]),
                    E = i.useCallback(e => {
                        u(t, t => (null != t ? t : []).filter(t => t !== e))
                    }, [t, u]);
                return {
                    editStateIds: o,
                    addNewEditStateId: d,
                    addNewEditStateFromTemplate: c,
                    removeEditStateId: E
                }
            }
        },
        65722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionSettingsVisibility: function() {
                    return l
                },
                canSeeGuildRoleSubscriptionSettings: function() {
                    return f
                },
                useGuildRoleSubscriptionSettingsVisibility: function() {
                    return _
                },
                useCanManageGuildRoleSubscriptions: function() {
                    return S
                },
                canManageGuildRoleSubscriptions: function() {
                    return A
                }
            });
            var i, l, r = n("446674"),
                u = n("7331"),
                a = n("465869"),
                s = n("957255"),
                o = n("697218"),
                d = n("808388"),
                c = n("49111");
            (i = l || (l = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

            function E(e) {
                if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return l.NONE;
                if (function(e) {
                        let {
                            guild: t,
                            isOwner: n,
                            canManageGuildRoleSubscriptions: i,
                            isGuildEligibleForRoleSubscriptions: l,
                            isExpeditedMonetizationOnboardingGuild: r,
                            isUserInCreatorMonetizationEligibleCountry: u,
                            shouldRestrictUpdatingRoleSubscriptionSettings: a
                        } = e;
                        return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!i && (!a || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!l || !!r) && n && u)
                    }(e)) return l.VISIBLE;
                let {
                    guild: t,
                    isOwner: n,
                    isUserInCreatorMonetizationEligibleCountry: i,
                    isMonetizationWaitlistEnabledForGuild: r,
                    isGuildEligibleForRoleSubscriptions: u,
                    isExpeditedMonetizationOnboardingGuild: a
                } = e;
                return n && !i && r ? l.WAITLIST_ONLY : n && r && (u || a) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? l.NEEDS_COMMUNITY : l.NONE
            }

            function f(e) {
                return E(e) !== l.NONE
            }

            function _(e) {
                let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
                    n = (0, u.useIsExpeditedOnboardingGuild)(e),
                    i = (0, u.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
                    s = S(e),
                    c = (0, r.useStateFromStores)([o.default], () => {
                        let t = o.default.getCurrentUser();
                        return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
                    }),
                    f = (0, u.useIsUserInCreatorMonetizationEligibleCountry)(),
                    {
                        shouldRestrictUpdatingCreatorMonetizationSettings: _
                    } = (0, a.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
                return null == e ? l.NONE : E({
                    guild: e,
                    isOwner: c,
                    canManageGuildRoleSubscriptions: s,
                    isGuildEligibleForRoleSubscriptions: t,
                    isMonetizationWaitlistEnabledForGuild: i,
                    isExpeditedMonetizationOnboardingGuild: n,
                    isUserInCreatorMonetizationEligibleCountry: f,
                    shouldRestrictUpdatingRoleSubscriptionSettings: _
                })
            }

            function S(e) {
                let t = (0, r.useStateFromStores)([s.default], () => A(e), [e]);
                return t
            }

            function A(e) {
                return null != e && s.default.can(c.Permissions.ADMINISTRATOR, e)
            }
        },
        736880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("233069"),
                u = n("42203");
            let a = {},
                s = {};
            class o extends i.default.Store {
                getTemplates(e) {
                    return a[e]
                }
                getTemplateWithCategory(e, t) {
                    var n;
                    return null === (n = a[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
                }
                getChannel(e) {
                    return s[e]
                }
            }
            o.displayName = "GuildRoleSubscriptionTierTemplatesStore";
            var d = new o(l.default, {
                GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
                    let {
                        selectedTemplate: t,
                        guildId: n
                    } = e, i = Object.values(u.default.getMutableGuildChannelsForGuild(n));
                    t.listings.forEach(e => {
                        e.channels.forEach(e => {
                            let t = i.find(t => t.name === e.name);
                            if (void 0 !== t) e.id = t.id;
                            else if (!(e.id in s)) {
                                let t = (0, r.createChannelRecord)(e);
                                s[e.id] = t
                            }
                        })
                    })
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
                    let {
                        templates: t,
                        guildId: n
                    } = e;
                    a[n] = t
                }
            })
        },
        432153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return C
                },
                useSuggestedUnusedPrices: function() {
                    return T
                },
                announceCreateTemplateChannels: function() {
                    return I
                },
                announceDeleteTemplateChannels: function() {
                    return L
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return g
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return m
                },
                isEligibleForNewBadge: function() {
                    return N
                }
            });
            var i = n("642852"),
                l = n.n(i),
                r = n("65597"),
                u = n("913144"),
                a = n("437140"),
                s = n("42203"),
                o = n("808388"),
                d = n("648825"),
                c = n("971150"),
                E = n("65722"),
                f = n("736880"),
                _ = n("49111"),
                S = n("724210");
            l.shim();
            let A = {};

            function C(e) {
                let t = (0, r.default)([s.default], () => s.default.getChannel(e)),
                    n = (0, r.default)([f.default], () => f.default.getChannel(e));
                return null != t ? t : n
            }

            function T(e, t, n) {
                let i = (0, r.default)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
                    l = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    u = (0, c.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let a = i.filter(e => !e.soft_deleted && !e.archived),
                    s = a.map(e => e.subscription_plans[0].price),
                    o = [];
                void 0 !== l && l.forEach(e => {
                    let t = u[e],
                        n = null == t ? void 0 : t.priceTier;
                    null != n && o.push(n)
                });
                let E = new Set(o.concat(s));
                if (!E.has(n)) return null;
                let f = t.indexOf(n);
                if (-1 === f) return null;
                let _ = [];
                for (let e = f + 1; e < t.length && (!E.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
                return _
            }

            function p(e) {
                let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = c.useEditStateStore.getState().listings,
                    i = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let l = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == l || l.forEach(e => {
                        null != f.default.getChannel(e.ref_id) && i.add(e.ref_id)
                    })
                });
                let l = [];
                for (let t of i) {
                    let n = f.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        l.push(t)
                    }
                }
                return l
            }

            function I(e) {
                let t = p(e);
                A[e] = t, t.forEach(e => {
                    let t = e.set("flags", S.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    u.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function L(e) {
                var t;
                let n = null !== (t = A[e]) && void 0 !== t ? t : p(e);
                n.forEach(e => {
                    u.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function g(e, t) {
                let n = [],
                    i = [];
                if (t.forEach(t => {
                        let l = f.default.getChannel(t.ref_id);
                        null != l && (n.push(a.default.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), i.push(l))
                    }), 0 === n.length) return;
                let l = await Promise.allSettled(n);
                l.forEach((n, l) => {
                    let r = i[l].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            i = c.useEditStateStore.getState().editStateIdsForGroup[e],
                            l = c.useEditStateStore.getState().listings;
                        null != i && i.forEach(e => {
                            var n;
                            let i = null === (n = l[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == i || i.forEach(e => {
                                e.ref_id === r && (e.ref_id = t.id)
                            })
                        })
                    } else if (null != t) {
                        let e = t.findIndex(e => e.ref_id === r);
                        if (-1 !== e) null == t || t.splice(e, 1)
                    }
                })
            }

            function m(e, t) {
                var n, i;
                let l = c.useEditStateStore.getState().listings[e],
                    r = null == l ? void 0 : l.usedTemplate;
                if (null == r) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let u = f.default.getTemplateWithCategory(t, r);
                if (null == u) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let a = u.listings[0];
                if ((null == l ? void 0 : l.name) !== a.name || (null == l ? void 0 : l.description) !== a.description || (null == l ? void 0 : l.priceTier) !== a.price_tier || (null == l ? void 0 : l.image) !== a.image || (null == l ? void 0 : l.roleColor) !== a.role_color || (null == l ? void 0 : null === (n = l.channelBenefits) || void 0 === n ? void 0 : n.length) !== a.channels.length || (null == l ? void 0 : null === (i = l.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== a.additional_perks.length) return {
                    templateCategory: u.category,
                    hasChangeFromTemplate: !0
                };
                for (let e = 0; e < a.channels.length; e++) {
                    let t = l.channelBenefits[e],
                        n = a.channels[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: u.category,
                        hasChangeFromTemplate: !0
                    }
                }
                for (let e = 0; e < a.additional_perks.length; e++) {
                    let t = l.intangibleBenefits[e],
                        n = a.additional_perks[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: u.category,
                        hasChangeFromTemplate: !0
                    }
                }
                return {
                    templateCategory: u.category,
                    hasChangeFromTemplate: !1
                }
            }

            function N(e) {
                return (0, E.canManageGuildRoleSubscriptions)(e) && e.hasFeature(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, o.isUserEligibleForTierTemplates)() && (0, o.isGuildEligibleForTierTemplates)(e.id)
            }
        },
        629126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                l = n("385976"),
                r = function(e, t) {
                    return (0, i.useStateFromStores)([l.default], () => {
                        var n;
                        if (null == t) return null;
                        let i = l.default.getDisambiguatedEmojiContext(e);
                        return null !== (n = i.getById(t)) && void 0 !== n ? n : i.getByName(t)
                    }, [e, t])
                }
        },
        41391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("385976"),
                u = n("153043");
            let a = [];

            function s(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildEmoji(e), [e]);
                return i.useMemo(() => null == t ? a : t.filter(t => (0, u.isRoleSubscriptionEmoji)(t, e)), [t, e])
            }
        },
        549590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                l = n("305961"),
                r = n("837008");

            function u(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                    u = (0, r.useSubscriptionListing)(t);
                return null == n || null == u ? null : n.roles[u.role_id]
            }
        },
        59767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("577357"),
                r = n("677795"),
                u = n("646718"),
                a = n("782340");

            function s(e) {
                return i.useMemo(() => {
                    var t;
                    let n = r.TIER_TRIAL_INTERVALS.map(e => ({
                            value: e,
                            label: e.interval === u.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? a.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
                                defaultLimit: (0, l.formatPlanIntervalDuration)(e)
                            }) : (0, l.formatPlanIntervalDuration)(e),
                            isDefault: e.interval === u.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
                        })),
                        i = null != e ? null === (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
                    return {
                        options: n,
                        selectedOption: i
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
            var i = n("446674"),
                l = n("42203");

            function r(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => e.filter(e => l.default.hasChannel(e.ref_id)), [e]);
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
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                u = n("430568"),
                a = n("20606"),
                s = n("629126"),
                o = n("915675"),
                d = n("6914");

            function c(e) {
                var t;
                let {
                    guildId: n,
                    emojiId: l,
                    emojiName: c,
                    className: E
                } = e, f = (0, s.default)(n, l);
                return null != f || null != c ? (0, i.jsx)(u.default, {
                    emojiId: null == f ? void 0 : f.id,
                    emojiName: null != c ? c : null == f ? void 0 : f.name,
                    animated: null !== (t = null == f ? void 0 : f.animated) && void 0 !== t && t,
                    className: r(d.emojiIcon, E)
                }) : (0, i.jsx)(o.default, {
                    className: r(d.emojiIcon, E),
                    color: a.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
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
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("139375"),
                u = n("419830"),
                a = n("990745"),
                s = n("449008"),
                o = n("432153"),
                d = n("677795"),
                c = n("782340"),
                E = n("856972");

            function f(e) {
                let {
                    channelId: t
                } = e, n = (0, o.useChannelWithTemplateFallback)(t);
                if (null == n) return (0, i.jsx)(i.Fragment, {
                    children: "[".concat(c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
                });
                let s = n.isMediaChannel() ? a.default : (0, u.getSimpleChannelIconComponent)(n.type);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.HiddenVisually, {
                        children: (0, r.default)({
                            channel: n
                        })
                    }), (0, i.jsxs)("div", {
                        "aria-hidden": !0,
                        children: [null != s && (0, i.jsx)(s, {
                            className: E.icon,
                            "aria-hidden": !0
                        }), n.name]
                    })]
                })
            }

            function _(e) {
                switch (e.ref_type) {
                    case d.GuildRoleSubscriptionBenefitTypes.CHANNEL:
                        return (0, i.jsx)(f, {
                            channelId: e.ref_id
                        });
                    case d.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
                        return e.name;
                    default:
                        (0, s.assertNever)(e)
                }
            }
        },
        246506: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                u = n.n(r),
                a = n("446674"),
                s = n("405645"),
                o = n("692038"),
                d = n("815297"),
                c = n("291655"),
                E = n("697218"),
                f = n("387111"),
                _ = n("439932"),
                S = n("49111"),
                A = n("782340"),
                C = n("515476");

            function T(e) {
                var t;
                let {
                    guildId: n,
                    role: r,
                    theme: T,
                    content: p = A.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
                    className: I
                } = e, L = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()), g = f.default.useName(n, null, L), m = (0, s.getRoleIconProps)(r), N = l.useMemo(() => (0, o.createMessageRecord)({
                    ...(0, d.default)({
                        channelId: "0",
                        content: p,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: L
                    }),
                    state: S.MessageStates.SENT,
                    id: "0"
                }), [L, p]), v = {
                    nick: g,
                    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
                };
                return (0, i.jsx)("div", {
                    className: u((0, _.getThemeClass)(T), C.container, I),
                    children: (0, i.jsx)(c.default, {
                        hideTimestamp: !0,
                        author: v,
                        roleIcon: m,
                        message: N,
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
                    return l
                }
            });
            var i = n("308503");
            let l = (0, i.default)(e => ({
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
                    return s
                }
            });
            var i = n("77078"),
                l = n("244201"),
                r = n("558286"),
                u = n("49111");
            let a = "guild-event-modal";
            var s = () => {
                let e = (0, l.useAppContext)(),
                    t = e === u.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: a,
                    contextKey: t,
                    onCloseRequest: () => {
                        r.useGuildEventModalStore.getState().canCloseModal && (0, i.closeModal)(a, t)
                    }
                }
            }
        },
        291655: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                u = n.n(r),
                a = n("193865"),
                s = n("780571"),
                o = n("39331"),
                d = n("596368"),
                c = n("227439"),
                E = n("877671"),
                f = l.memo(function(e) {
                    var t, n, l;
                    let {
                        message: r,
                        channel: f,
                        compact: _,
                        className: S,
                        isGroupStart: A,
                        hideSimpleEmbedContent: C = !0,
                        disableInteraction: T
                    } = e, p = (0, a.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()), I = (0, a.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == f ? void 0 : f.guild_id) && void 0 !== n ? n : "", (null !== (l = r.editedTimestamp) && void 0 !== l ? l : r.timestamp).valueOf()), {
                        content: L
                    } = (0, o.default)(r, {
                        hideSimpleEmbedContent: C,
                        allowList: p.showListsAndHeaders || I.showListsAndHeaders,
                        allowHeading: p.showListsAndHeaders || I.showListsAndHeaders,
                        allowLinks: p.showMaskedLinks || I.showMaskedLinks,
                        previewLinkTarget: p.showMaskedLinks || I.showMaskedLinks
                    });
                    return (0, i.jsx)(s.default, {
                        compact: _,
                        className: u(S, {
                            [E.message]: !0,
                            [E.cozyMessage]: !_,
                            [E.groupStart]: A
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: f,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, d.default)(e, L),
                        disableInteraction: T
                    })
                })
        },
        223170: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                welcomeScreenViewed: function() {
                    return u
                },
                fetchWelcomeScreen: function() {
                    return a
                },
                resetWelcomeScreen: function() {
                    return s
                },
                clearWelcomeScreenSettings: function() {
                    return o
                },
                updateSettings: function() {
                    return d
                },
                saveWelcomeScreen: function() {
                    return c
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("49111");
            let u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    l.default.dispatch({
                        type: "WELCOME_SCREEN_VIEW",
                        guildId: e,
                        isLurking: t
                    })
                },
                a = async e => {
                    l.default.dispatch({
                        type: "WELCOME_SCREEN_FETCH_START"
                    });
                    try {
                        let t = await i.default.get({
                            url: r.Endpoints.GUILD_WELCOME_SCREEN(e),
                            oldFormErrors: !0
                        });
                        return l.default.dispatch({
                            type: "WELCOME_SCREEN_FETCH_SUCCESS",
                            guildId: e,
                            welcomeScreen: t.body
                        }), t.body
                    } catch (e) {
                        l.default.dispatch({
                            type: "WELCOME_SCREEN_FETCH_FAIL"
                        })
                    }
                }, s = () => {
                    l.default.dispatch({
                        type: "WELCOME_SCREEN_SETTINGS_RESET"
                    })
                }, o = () => {
                    l.default.dispatch({
                        type: "WELCOME_SCREEN_SETTINGS_CLEAR"
                    })
                }, d = e => {
                    l.default.dispatch({
                        type: "WELCOME_SCREEN_SETTINGS_UPDATE",
                        settings: e
                    })
                }, c = async (e, t) => {
                    l.default.dispatch({
                        type: "WELCOME_SCREEN_SUBMIT"
                    });
                    try {
                        let n = await i.default.patch({
                            url: r.Endpoints.GUILD_WELCOME_SCREEN(e),
                            body: {
                                description: t.description,
                                welcome_channels: t.channels,
                                enabled: t.enabled
                            },
                            oldFormErrors: !0
                        });
                        l.default.dispatch({
                            type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
                            guildId: e,
                            welcomeScreen: n.body
                        })
                    } catch (e) {
                        l.default.dispatch({
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
            var i = n("446674"),
                l = n("913144");
            let r = {},
                u = {},
                a = {},
                s = !1,
                o = !1,
                d = !1;

            function c(e) {
                let {
                    guild: t
                } = e.invite;
                return (null == t ? void 0 : t.welcome_screen) != null && (u[t.id] = t.welcome_screen, !0)
            }

            function E(e) {
                let {
                    welcomeScreen: t,
                    guildId: n
                } = e;
                u[n] = null != t ? t : r
            }
            class f extends i.default.Store {
                get(e) {
                    if (null != e) return u[e]
                }
                isFetching() {
                    return o
                }
                hasError() {
                    return d
                }
                hasSeen(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null != e && (t ? s : a[e] || !1)
                }
                isEmpty(e) {
                    if (null == e) return !0;
                    let t = u[e];
                    return null == t || 0 === t.welcome_channels.length
                }
            }
            f.displayName = "WelcomeScreenStore";
            var _ = new f(l.default, {
                INVITE_RESOLVE_SUCCESS: c,
                INVITE_ACCEPT_SUCCESS: c,
                WELCOME_SCREEN_SUBMIT_SUCCESS: E,
                WELCOME_SCREEN_UPDATE: E,
                WELCOME_SCREEN_VIEW: function(e) {
                    let {
                        guildId: t,
                        isLurking: n
                    } = e;
                    a[t] = !0, n && (s = !0)
                },
                GUILD_STOP_LURKING: function() {
                    s = !1
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    a[t] = !1
                },
                WELCOME_SCREEN_FETCH_START: function() {
                    o = !0, d = !1
                },
                WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
                    o = !1, d = !1;
                    let {
                        welcomeScreen: t,
                        guildId: n
                    } = e;
                    u[n] = null != t ? t : r
                },
                WELCOME_SCREEN_FETCH_FAIL: function() {
                    o = !1, d = !0
                }
            })
        }
    }
]);
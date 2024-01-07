            "use strict";
            n.r(t), n.d(t, {
                officialApplicationIds: function() {
                    return T
                },
                ConnectionConfigurationRuleOperator: function() {
                    return a
                },
                getCallbackParamsFromURL: function() {
                    return C
                },
                getConnectionsCheckText: function() {
                    return m
                },
                isVerifiedRolesChannelVisible: function() {
                    return S
                },
                getVisibleConnectionsRole: function() {
                    return I
                },
                getCreatedAtDate: function() {
                    return g
                }
            });
            var i, a, l = n("627445"),
                s = n.n(l),
                r = n("917351"),
                u = n.n(r),
                o = n("746379"),
                d = n.n(o),
                c = n("429030");
            n("151426");
            var _ = n("98309");
            n("10641");
            var E = n("305961");
            n("957255");
            var f = n("214509"),
                h = n("49111"),
                p = n("782340");
            let T = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

            function C(e) {
                let {
                    query: t
                } = d.parse(e, !0), {
                    code: n,
                    state: i,
                    error: a,
                    error_description: l
                } = t;
                return s(!Array.isArray(n), "Received multiple query param values for code"), s(!Array.isArray(i), "Received multiple query param values for state"), s(!Array.isArray(a), "Received multiple query param values for error"), s(!Array.isArray(l), "Received multiple query param values for error_description"), {
                    code: n,
                    state: i,
                    error: a,
                    errorDescription: l
                }
            }

            function m(e) {
                let {
                    connectionType: t,
                    connectionMetadataField: n,
                    operator: i,
                    operatorText: a,
                    value: l
                } = e, s = null, r = Math.round(Number(l));
                switch (i) {
                    case f.OperatorTypes.EQUAL:
                        s = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === h.PlatformTypes.PAYPAL && n === f.MetadataFields.PAYPAL_VERIFIED && (s = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                        break;
                    case f.OperatorTypes.NOT_EQUAL:
                        s = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                        break;
                    case f.OperatorTypes.LESS_THAN:
                        s = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, r = Math.max(0, r - 1);
                        break;
                    case f.OperatorTypes.GREATER_THAN:
                        s = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, r = Math.max(0, r + 1);
                        break;
                    case void 0:
                    case null:
                        return null
                }
                if (null != a && (s = a), s instanceof c.FormattedMessage && null != i) switch (t) {
                    case h.PlatformTypes.REDDIT:
                        switch (n) {
                            case f.MetadataFields.CREATED_AT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: r
                                    })
                                });
                                break;
                            case f.MetadataFields.REDDIT_TOTAL_KARMA:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                        karma: r
                                    })
                                });
                                break;
                            case f.MetadataFields.REDDIT_GOLD:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                                });
                                break;
                            case f.MetadataFields.REDDIT_MOD:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case h.PlatformTypes.STEAM:
                        switch (n) {
                            case f.MetadataFields.CREATED_AT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: r
                                    })
                                });
                                break;
                            case f.MetadataFields.STEAM_GAME_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                        count: r
                                    })
                                });
                                break;
                            case f.MetadataFields.STEAM_ITEM_COUNT_TF2:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                        count: r
                                    })
                                });
                                break;
                            case f.MetadataFields.STEAM_ITEM_COUNT_DOTA2:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                        count: r
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case h.PlatformTypes.TWITTER:
                        switch (n) {
                            case f.MetadataFields.CREATED_AT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: r
                                    })
                                });
                                break;
                            case f.MetadataFields.TWITTER_VERIFIED:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                                });
                                break;
                            case f.MetadataFields.TWITTER_FOLLOWERS_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                        count: r
                                    })
                                });
                                break;
                            case f.MetadataFields.TWITTER_STATUSES_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                        count: r
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case h.PlatformTypes.PAYPAL:
                        switch (n) {
                            case f.MetadataFields.CREATED_AT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: r
                                    })
                                });
                                break;
                            case f.MetadataFields.PAYPAL_VERIFIED:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case h.PlatformTypes.EBAY:
                        switch (n) {
                            case f.MetadataFields.CREATED_AT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: r
                                    })
                                });
                                break;
                            case f.MetadataFields.EBAY_TOP_RATED_SELLER:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                                });
                                break;
                            case f.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                        value: r
                                    })
                                });
                                break;
                            case f.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                        count: r
                                    })
                                });
                                break;
                            case f.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                        count: r
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case h.PlatformTypes.TIKTOK:
                        switch (n) {
                            case f.MetadataFields.TIKTOK_VERIFIED:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                                });
                                break;
                            case f.MetadataFields.TIKTOK_FOLLOWER_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                        count: r
                                    })
                                });
                                break;
                            case f.MetadataFields.TIKTOK_FOLLOWING_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                        count: r
                                    })
                                });
                                break;
                            case f.MetadataFields.TIKTOK_LIKES_COUNT:
                                s = s.format({
                                    platformQuantityHook: () => p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                        count: r
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    default:
                        return null
                }
                return s
            }

            function S(e) {
                return Object.values(e.roles).some(e => {
                    var t;
                    return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                })
            }

            function I(e) {
                var t, n;
                let {
                    guildMember: i,
                    guild: a,
                    channel: l,
                    onlyChannelConnectionRoles: r = !1
                } = e;
                if (null == i) return null;
                if (null == a && null != l && (a = E.default.getGuild(l.getGuildId())), null == a) return null;
                let o = i.roles.map(e => {
                        var t;
                        return null == a ? void 0 : null === (t = a.roles) || void 0 === t ? void 0 : t[e]
                    }).filter(e => {
                        var t;
                        return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                    }).sort((e, t) => (s(null != e && null != t, "roleA or roleB is null"), t.position - e.position)),
                    d = u.intersection(o, (0, _.default)(l));
                return d.length > 0 ? null !== (t = d[0]) && void 0 !== t ? t : null : r ? null : null !== (n = o[0]) && void 0 !== n ? n : null
            }

            function g(e, t) {
                if (null == e || "" === e) return null;
                let n = new Date(e);
                return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                })
            }(i = a || (a = {}))[i.AND = 0] = "AND", i[i.OR = 1] = "OR"
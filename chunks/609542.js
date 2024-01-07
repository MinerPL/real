            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("819855"),
                u = s("77078"),
                c = s("308289"),
                E = s("841098"),
                _ = s("376556"),
                T = s("945330"),
                I = s("49111"),
                S = s("214509"),
                N = s("782340"),
                g = s("817760");

            function f(e) {
                var t, s;
                let n, {
                    theme: l,
                    platform: r,
                    integration: E,
                    onRemove: _,
                    locked: I
                } = e;
                if ((null == E ? void 0 : E.application) != null) o(null != E.application.bot, "bot is null"), n = (0, a.jsx)(c.default, {
                    size: u.AvatarSizes.SIZE_24,
                    user: E.application.bot,
                    className: g.verifiedIcon
                });
                else if (null != r) {
                    let e = (0, d.isThemeLight)(l) ? r.icon.lightSVG : r.icon.darkSVG;
                    n = (0, a.jsx)("img", {
                        className: g.verifiedIcon,
                        src: e,
                        alt: N.default.Messages.IMG_ALT_LOGO.format({
                            name: r.name
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: i(g.verifiedRow, (null == r ? void 0 : r.hasMetadata) === !0 || (null == E ? void 0 : E.role_connections_metadata) != null && (null == E ? void 0 : E.role_connections_metadata.length) > 0 ? g.verifiedRowWithMetadata : null),
                    children: [n, (0, a.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: g.verifiedText,
                        children: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_ACCOUNT.format({
                            platformName: null !== (s = null == r ? void 0 : r.name) && void 0 !== s ? s : null == E ? void 0 : null === (t = E.application) || void 0 === t ? void 0 : t.name
                        })
                    }), (0, a.jsx)(u.Button, {
                        "aria-label": N.default.Messages.REMOVE,
                        size: u.Button.Sizes.TINY,
                        look: u.Button.Looks.BLANK,
                        onClick: _,
                        disabled: I,
                        className: g.closeButton,
                        children: (0, a.jsx)(u.Tooltip, {
                            text: N.default.Messages.REMOVE,
                            children: e => (0, a.jsx)(T.default, {
                                className: g.closeIcon,
                                ...e
                            })
                        })
                    })]
                })
            }

            function A(e) {
                var t, s, l;
                let {
                    inputRef: i,
                    existingPendingConfiguration: r,
                    locked: o,
                    onConfigurationChange: d,
                    platform: c,
                    applicationId: E,
                    metadataField: _,
                    operator: T
                } = e, I = null !== (s = null == r ? void 0 : r.index) && void 0 !== s ? s : -1, N = null != T ? T : S.OperatorTypes.GREATER_THAN, f = Math.round(Number(null !== (l = null == r ? void 0 : null === (t = r.configuration) || void 0 === t ? void 0 : t.value) && void 0 !== l ? l : 0));
                N === S.OperatorTypes.GREATER_THAN ? f = Math.max(1, f + 1) : N === S.OperatorTypes.LESS_THAN && (f = Math.max(0, f - 1));
                let [A, L] = n.useState(f.toString());
                return n.useEffect(() => {
                    L(A)
                }, [A]), (0, a.jsx)(u.TextInput, {
                    inputRef: i,
                    type: "number",
                    className: g.numericalRuleInput,
                    size: u.TextInput.Sizes.MINI,
                    value: A,
                    onChange: e => {
                        if (null != r) {
                            if ("" !== e) {
                                var t;
                                let s = Math.round(Number(e));
                                N === S.OperatorTypes.GREATER_THAN ? s = Math.max(0, s - 1) : N === S.OperatorTypes.LESS_THAN && (s = Math.max(1, s + 1)), d({
                                    connectionType: null !== (t = null == c ? void 0 : c.type) && void 0 !== t ? t : S.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE,
                                    applicationId: E,
                                    connectionMetadataField: _,
                                    operator: N,
                                    value: s.toString()
                                }, I)
                            }
                            L(e)
                        }
                    },
                    disabled: o
                }, _)
            }

            function L(e) {
                let {
                    titleText: t,
                    fieldText: s,
                    metadataField: n,
                    existingPendingConfiguration: l,
                    platform: i,
                    applicationId: r,
                    onConfigurationChange: o,
                    locked: d
                } = e;
                return (0, a.jsxs)("div", {
                    className: g.ruleContainer,
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            className: g.ruleItemHeader,
                            children: t
                        }), (0, a.jsx)("div", {
                            className: g.numericalRuleSubItemContainer,
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: g.numericalRuleSubText,
                                children: s
                            })
                        })]
                    }), (0, a.jsx)(u.Switch, {
                        className: g.ruleItemSwitch,
                        checked: (null == l ? void 0 : l.configuration.value) === "1",
                        onChange: e => {
                            var t, s;
                            let a = null;
                            e && (a = {
                                connectionType: null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : S.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE,
                                applicationId: r,
                                connectionMetadataField: n,
                                operator: S.OperatorTypes.EQUAL,
                                value: "1"
                            }), o(a, null !== (s = null == l ? void 0 : l.index) && void 0 !== s ? s : -1)
                        },
                        disabled: d
                    })]
                }, n)
            }

            function m(e) {
                let {
                    titleText: t,
                    fieldText: s,
                    fieldTextHook: l,
                    metadataField: i,
                    existingPendingConfiguration: r,
                    platform: o,
                    applicationId: d,
                    onConfigurationChange: c,
                    locked: E,
                    operator: _
                } = e, T = n.createRef(), I = (null == r ? void 0 : r.configuration) != null, N = (0, a.jsx)(A, {
                    inputRef: T,
                    metadataField: i,
                    existingPendingConfiguration: r,
                    locked: E || !I,
                    onConfigurationChange: c,
                    platform: o,
                    operator: _,
                    applicationId: d
                }, i), f = null != l ? l.format({
                    metadataHook: () => N
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [N, (0, a.jsx)("span", {
                        className: g.fieldText,
                        children: s
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: g.ruleContainer,
                    children: [(0, a.jsxs)("div", {
                        className: g.ruleContainerLabel,
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/bold",
                            className: g.ruleItemHeader,
                            children: t
                        }), (0, a.jsx)("div", {
                            className: g.numericalRuleSubItemContainer,
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: g.numericalRuleSubText,
                                children: f
                            })
                        })]
                    }), (0, a.jsx)(u.Switch, {
                        className: g.ruleItemSwitch,
                        checked: I,
                        onChange: e => {
                            var t, s, a;
                            let n = null;
                            if (e) {
                                let e = null != _ ? _ : S.OperatorTypes.GREATER_THAN,
                                    a = Math.round(Number(null === (t = T.current) || void 0 === t ? void 0 : t.value));
                                e === S.OperatorTypes.GREATER_THAN ? a = Math.max(0, a - 1) : e === S.OperatorTypes.LESS_THAN && (a = Math.max(1, a + 1)), n = {
                                    connectionType: null !== (s = null == o ? void 0 : o.type) && void 0 !== s ? s : S.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE,
                                    applicationId: d,
                                    connectionMetadataField: i,
                                    operator: e,
                                    value: a.toString()
                                }
                            }
                            c(n, null !== (a = null == r ? void 0 : r.index) && void 0 !== a ? a : -1)
                        },
                        disabled: E
                    })]
                }, i)
            }

            function C(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n
                } = e, l = _.default.get(I.PlatformTypes.STEAM);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
                        metadataField: S.MetadataFields.CREATED_AT,
                        existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_STEAM_GAMES,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_GAMES,
                        metadataField: S.MetadataFields.STEAM_GAME_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.STEAM_GAME_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
                            gameName: N.default.Messages.CONNECTIONS_STEAM_DOTA2
                        }),
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_DOTA2,
                        metadataField: S.MetadataFields.STEAM_ITEM_COUNT_DOTA2,
                        existingPendingConfiguration: t.get(S.MetadataFields.STEAM_ITEM_COUNT_DOTA2),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
                            gameName: N.default.Messages.CONNECTIONS_STEAM_TF2
                        }),
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TF2,
                        metadataField: S.MetadataFields.STEAM_ITEM_COUNT_TF2,
                        existingPendingConfiguration: t.get(S.MetadataFields.STEAM_ITEM_COUNT_TF2),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    })]
                })
            }

            function O(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n
                } = e, l = _.default.get(I.PlatformTypes.TWITTER);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
                        metadataField: S.MetadataFields.CREATED_AT,
                        existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_TWITTER_FOLLOWERS,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
                        metadataField: S.MetadataFields.TWITTER_FOLLOWERS_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.TWITTER_FOLLOWERS_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_TWITTER_STATUSES,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TWEETS,
                        metadataField: S.MetadataFields.TWITTER_STATUSES_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.TWITTER_STATUSES_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(L, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_VERIFIED,
                        fieldText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
                        metadataField: S.MetadataFields.TWITTER_VERIFIED,
                        existingPendingConfiguration: t.get(S.MetadataFields.TWITTER_VERIFIED),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    })]
                })
            }

            function h(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n
                } = e, l = _.default.get(I.PlatformTypes.REDDIT);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
                        metadataField: S.MetadataFields.CREATED_AT,
                        existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_REDDIT_KARMA,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_KARMA,
                        metadataField: S.MetadataFields.REDDIT_TOTAL_KARMA,
                        existingPendingConfiguration: t.get(S.MetadataFields.REDDIT_TOTAL_KARMA),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(L, {
                        titleText: N.default.Messages.CONNECTIONS_REDDIT_MOD,
                        fieldText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_MOD,
                        metadataField: S.MetadataFields.REDDIT_MOD,
                        existingPendingConfiguration: t.get(S.MetadataFields.REDDIT_MOD),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(L, {
                        titleText: N.default.Messages.CONNECTIONS_REDDIT_GOLD,
                        fieldText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_GOLD,
                        metadataField: S.MetadataFields.REDDIT_GOLD,
                        existingPendingConfiguration: t.get(S.MetadataFields.REDDIT_GOLD),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    })]
                })
            }

            function R(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n
                } = e, l = _.default.get(I.PlatformTypes.PAYPAL);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
                        metadataField: S.MetadataFields.CREATED_AT,
                        existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(L, {
                        titleText: N.default.Messages.CONNECTIONS_PAYPAL_VERIFIED,
                        fieldText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_PAYPAL_VERIFIED_BANK_ACCOUNT,
                        metadataField: S.MetadataFields.PAYPAL_VERIFIED,
                        existingPendingConfiguration: t.get(S.MetadataFields.PAYPAL_VERIFIED),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    })]
                })
            }

            function D(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n
                } = e, l = _.default.get(I.PlatformTypes.EBAY);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m, {
                        titleText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
                        metadataField: S.MetadataFields.CREATED_AT,
                        existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_POSITIVE_FEEDBACK_PERCENTAGE,
                        metadataField: S.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                        existingPendingConfiguration: t.get(S.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                        metadataField: S.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_MOST_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                        metadataField: S.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n,
                        operator: S.OperatorTypes.LESS_THAN
                    }), (0, a.jsx)(L, {
                        titleText: N.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER,
                        fieldText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_TOP_RATED_SELLER,
                        metadataField: S.MetadataFields.EBAY_TOP_RATED_SELLER,
                        existingPendingConfiguration: t.get(S.MetadataFields.EBAY_TOP_RATED_SELLER),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    })]
                })
            }

            function M(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n
                } = e, l = _.default.get(I.PlatformTypes.TIKTOK);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(L, {
                        titleText: N.default.Messages.CONNECTIONS_TIKTOK_VERIFIED,
                        fieldText: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
                        metadataField: S.MetadataFields.TIKTOK_VERIFIED,
                        existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_VERIFIED),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_TIKTOK_FOLLOWERS,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
                        metadataField: S.MetadataFields.TIKTOK_FOLLOWER_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_FOLLOWER_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_TIKTOK_FOLLOWING,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWING,
                        metadataField: S.MetadataFields.TIKTOK_FOLLOWING_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_FOLLOWING_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    }), (0, a.jsx)(m, {
                        titleText: N.default.Messages.CONNECTIONS_TIKTOK_LIKES,
                        fieldTextHook: N.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_LIKES,
                        metadataField: S.MetadataFields.TIKTOK_LIKES_COUNT,
                        existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_LIKES_COUNT),
                        platform: l,
                        onConfigurationChange: s,
                        locked: n
                    })]
                })
            }

            function G(e) {
                let {
                    configMetadataMap: t,
                    onConfigurationChange: s,
                    locked: n,
                    integration: l
                } = e;
                if (null == l || null == l.role_connections_metadata) return null;
                let i = l.role_connections_metadata.map(e => {
                    var i, r;
                    let o;
                    switch (e.type) {
                        case S.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                        case S.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                            o = S.OperatorTypes.LESS_THAN;
                            break;
                        case S.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                        case S.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            o = S.OperatorTypes.GREATER_THAN;
                            break;
                        case S.MetadataItemTypes.INTEGER_EQUAL:
                        case S.MetadataItemTypes.BOOLEAN_EQUAL:
                            o = S.OperatorTypes.EQUAL;
                            break;
                        case S.MetadataItemTypes.INTEGER_NOT_EQUAL:
                        case S.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
                            o = S.OperatorTypes.NOT_EQUAL;
                            break;
                        default:
                            return null
                    }
                    switch (e.type) {
                        case S.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                        case S.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                        case S.MetadataItemTypes.INTEGER_EQUAL:
                        case S.MetadataItemTypes.INTEGER_NOT_EQUAL:
                        case S.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                        case S.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            return (0, a.jsx)(m, {
                                titleText: e.name,
                                fieldText: e.description,
                                metadataField: e.key,
                                existingPendingConfiguration: t.get(e.key),
                                platform: null,
                                onConfigurationChange: s,
                                locked: n,
                                operator: o,
                                applicationId: null === (i = l.application) || void 0 === i ? void 0 : i.id
                            }, e.key);
                        case S.MetadataItemTypes.BOOLEAN_EQUAL:
                        case S.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
                            return (0, a.jsx)(L, {
                                titleText: e.name,
                                fieldText: e.description,
                                metadataField: e.key,
                                existingPendingConfiguration: t.get(e.key),
                                platform: null,
                                onConfigurationChange: s,
                                locked: n,
                                operator: o,
                                applicationId: null === (r = l.application) || void 0 === r ? void 0 : r.id
                            }, e.key)
                    }
                });
                return (0, a.jsx)(a.Fragment, {
                    children: i
                })
            }

            function x(e) {
                let t, {
                        configurationItems: s,
                        onConfigurationChange: n,
                        locked: l,
                        integrations: i
                    } = e,
                    r = (0, E.default)();
                if (s.length < 1) return null;
                let o = s[0].configuration.applicationId,
                    d = null != o ? null == i ? void 0 : i.find(e => {
                        var t;
                        return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === o
                    }) : void 0;
                if (null != o && null == d) return null;
                let u = null;
                try {
                    u = _.default.get(s[0].configuration.connectionType)
                } catch (e) {}
                let c = new Map;
                s.forEach(e => {
                    null != e.configuration.connectionMetadataField ? c.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
                });
                let T = {
                        configMetadataMap: c,
                        onConfigurationChange: n,
                        locked: l
                    },
                    S = null;
                switch (null == u ? void 0 : u.type) {
                    case I.PlatformTypes.STEAM:
                        S = (0, a.jsx)(C, {
                            ...T
                        });
                        break;
                    case I.PlatformTypes.TWITTER:
                        S = (0, a.jsx)(O, {
                            ...T
                        });
                        break;
                    case I.PlatformTypes.REDDIT:
                        S = (0, a.jsx)(h, {
                            ...T
                        });
                        break;
                    case I.PlatformTypes.PAYPAL:
                        S = (0, a.jsx)(R, {
                            ...T
                        });
                        break;
                    case I.PlatformTypes.EBAY:
                        S = (0, a.jsx)(D, {
                            ...T
                        });
                        break;
                    case I.PlatformTypes.TIKTOK:
                        S = (0, a.jsx)(M, {
                            ...T
                        });
                        break;
                    default:
                        S = (0, a.jsx)(G, {
                            ...T,
                            integration: d
                        })
                }
                return (0, a.jsxs)("div", {
                    className: g.container,
                    children: [(0, a.jsx)(f, {
                        theme: r,
                        platform: u,
                        integration: d,
                        onRemove: () => n(null, t.index),
                        locked: l
                    }), S]
                })
            }
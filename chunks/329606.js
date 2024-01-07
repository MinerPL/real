            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            }), s("222007"), s("834022");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("669491"),
                r = s("77078"),
                o = s("900938"),
                d = s("817674"),
                u = s("944441"),
                c = s("956089"),
                E = s("449008"),
                _ = s("701909"),
                T = s("523096"),
                I = s("353575"),
                S = s("296839"),
                N = s("4443"),
                g = s("151866"),
                f = s("646834"),
                A = s("124188"),
                L = s("155158"),
                m = s("143460"),
                C = s("49111"),
                O = s("782340"),
                h = s("202276");

            function R(e) {
                var t, s;
                let {
                    guildId: R,
                    setPreventNavigation: D = () => {}
                } = e, {
                    editingRule: M,
                    setEditingRule: G
                } = (0, g.useAutomodEditingRuleState)(), {
                    guild: x,
                    subsection: p
                } = (0, l.useStateFromStoresObject)([o.default], () => o.default.getProps()), U = null !== (s = null !== (t = null == x ? void 0 : x.id) && void 0 !== t ? t : R) && void 0 !== s ? s : "", v = null != M, [j] = (0, I.useSyncAutomodRulesEffect)(U), {
                    rulesByTriggerType: P
                } = (0, I.useAutomodRulesList)(U), y = {
                    [S.AutomodTriggerCategory.MEMBERS]: O.default.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
                    [S.AutomodTriggerCategory.CONTENT]: O.default.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
                }, b = n.useMemo(() => Object.values(null != P ? P : {}).flat().filter(E.isNotNullish), [P]);
                n.useEffect(() => {
                    v && G(null)
                }, [U]);
                let B = n.useCallback((e, t) => {
                        if (null != e) {
                            var s, a;
                            return null !== (a = null === (s = b.find(t => {
                                let {
                                    id: s
                                } = t;
                                return s === e
                            })) || void 0 === s ? void 0 : s.name) && void 0 !== a ? a : null
                        }
                        return null != t ? (0, S.triggerConfigs)[t].getDefaultRuleName() : null
                    }, [b]),
                    F = n.useMemo(() => {
                        var e, t;
                        return B(null !== (e = null == M ? void 0 : M.id) && void 0 !== e ? e : null, null !== (t = null == M ? void 0 : M.triggerType) && void 0 !== t ? t : null)
                    }, [B, M]);
                n.useEffect(() => {
                    D(v, (0, L.createOnPreventNavigation)(F))
                }, [D, v, F]);
                let H = (0, S.useAvailableTriggerTypes)(U),
                    V = e => (0, a.jsx)(a.Fragment, {
                        children: e.map(e => {
                            var t;
                            return (0, a.jsx)(A.default, {
                                guildId: U,
                                triggerType: e,
                                rules: null !== (t = P[e]) && void 0 !== t ? t : [],
                                initWithEdit: p === C.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM && e === m.AutomodTriggerType.MENTION_SPAM
                            }, e)
                        })
                    });
                return (0, a.jsxs)(r.FormSection, {
                    title: O.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
                    tag: "h1",
                    children: [(0, a.jsxs)("div", {
                        className: h.descriptionContainer,
                        children: [(0, a.jsxs)(r.FormSection, {
                            tag: "h3",
                            className: h.description,
                            titleClassName: h.descriptionHeader,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "header-secondary",
                                children: O.default.Messages.GUILD_SETTINGS_AUTOMOD_MESSAGE_FILTER_DESCRIPTION
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                className: h.helpUrl,
                                children: O.default.Messages.GUILD_AUTOMOD_LEARN_MORE_LINK.format({
                                    helpUrl: _.default.getArticleURL(C.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE)
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: h.descriptionAvatarContainer,
                            children: [(0, a.jsx)(r.Avatar, {
                                src: (0, T.getAutomodAvatarURL)(),
                                size: r.AvatarSizes.SIZE_80,
                                "aria-label": O.default.Messages.GUILD_AUTOMOD_USERNAME
                            }), (0, a.jsx)(c.TextBadge, {
                                text: (0, a.jsxs)("div", {
                                    className: h.automodBadgeText,
                                    children: [(0, a.jsx)(u.default, {
                                        width: 12,
                                        height: 12,
                                        className: h.checkmarkIcon
                                    }), (0, a.jsx)(r.Text, {
                                        variant: "text-xs/bold",
                                        className: h.automodText,
                                        children: O.default.Messages.GUILD_AUTOMOD_USERNAME
                                    })]
                                }),
                                color: i.default.unsafe_rawColors.BRAND_500.css,
                                className: h.textBadge
                            })]
                        })]
                    }), j ? (0, a.jsx)(N.default, {}) : Object.entries(H).map(e => {
                        let [t, s] = e;
                        if (0 === s.length) return (0, a.jsx)(n.Fragment, {}, t);
                        let l = null != y[t] ? (0, a.jsx)(r.FormSection, {
                            tag: "h3",
                            className: h.categoryHeader,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-lg/normal",
                                color: "header-primary",
                                children: y[t]
                            })
                        }) : null;
                        return (0, a.jsxs)("div", {
                            className: h.categoryContainer,
                            children: [l, V(s)]
                        }, t)
                    }), null != x && (0, a.jsx)(d.GuildExplicitContentFilter, {
                        guild: x,
                        withDivider: !1,
                        className: h.explicitContentFilterSection
                    }), (0, a.jsx)(f.default, {
                        guildId: U,
                        existingRules: b
                    }), v && (0, a.jsx)("div", {
                        className: h.endSpacer
                    })]
                })
            }
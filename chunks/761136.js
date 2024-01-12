            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("808653");
            var a = n("37983"),
                i = n("884691"),
                l = n("77078"),
                s = n("272030"),
                u = n("353575"),
                r = n("296839"),
                d = n("348934"),
                o = n("151866"),
                c = n("462392"),
                f = n("155158"),
                E = n("592407"),
                M = n("49111"),
                m = n("143460"),
                g = n("782340"),
                I = n("490291");
            let p = m.AutomodTriggerType.KEYWORD;

            function S(e, t) {
                let {
                    perGuildMaxCount: n
                } = r.triggerConfigs[p], {
                    isLoading: m,
                    saveRule: S
                } = (0, o.useAutomodEditingRuleActions)(), {
                    createNewEditingRule: A
                } = (0, o.useAutomodEditingRuleState)(), [v, _] = i.useState(!1), [h, T] = (0, u.useSyncAutomodRules)(t), {
                    rulesByTriggerType: C,
                    updateRule: R
                } = (0, u.useAutomodRulesList)(t), O = i.useMemo(() => {
                    var e;
                    return null !== (e = C[p]) && void 0 !== e ? e : []
                }, [C]), x = 0 === O.length, y = n > O.length && !x, N = i.useMemo(() => (0, d.canCurrentUserManageMessageFilters)(t), [t]);
                if (!N || null == e || 0 === e.length || null == t) return null;
                let b = e.split(" ").length,
                    j = () => {
                        null != t && ((0, s.closeContextMenu)(), E.default.open(t, M.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
                            A(t, p, {
                                triggerMetadata: {
                                    keywordFilter: [e],
                                    regexPatterns: [],
                                    allowList: []
                                }
                            })
                        }, 400))
                    },
                    D = async t => {
                        var n, a;
                        (0, s.closeContextMenu)();
                        let i = await (0, f.confirmAddKeyword)(t.name, e);
                        if (!i) return;
                        let l = {
                            ...t,
                            triggerMetadata: {
                                ...t.triggerMetadata,
                                keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
                            }
                        };
                        await S(l, O), R(l)
                    }, G = (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.MenuItem, {
                            id: "automod-rules-loading",
                            label: g.default.Messages.LOADING
                        })
                    });
                return !h && (G = (0, a.jsxs)(a.Fragment, {
                    children: [x && (0, a.jsx)(l.MenuItem, {
                        id: "add-first-rule",
                        label: g.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                        action: j,
                        disabled: m
                    }), O.map(e => {
                        let t = (0, r.getAvailableActionTypes)(p).reduce((t, n) => {
                            let a = e.actions.find(e => {
                                let {
                                    type: t
                                } = e;
                                return n === t
                            });
                            if (null == a) return t;
                            let i = (0, c.getActionInfo)(n, a);
                            return t += ", ".concat(null == i ? void 0 : i.headerText)
                        }, "");
                        return (0, a.jsx)(l.MenuRadioItem, {
                            id: e.id,
                            label: e.name,
                            subtext: (0, a.jsx)(l.Text, {
                                color: "text-muted",
                                className: I.actionTextHeader,
                                variant: "text-xs/normal",
                                children: t.slice(2)
                            }),
                            group: "automod-rule-selection",
                            checked: !1,
                            disabled: m,
                            action: () => D(e)
                        }, e.id)
                    }), y && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
                            id: "add-another-rule",
                            label: g.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                            action: j,
                            disabled: m
                        })]
                    })]
                })), (0, a.jsx)(l.MenuItem, {
                    id: "guild-automod-add-selection",
                    label: g.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
                        keywordCount: b
                    }),
                    onFocus: () => {
                        !v && (_(!0), T())
                    },
                    children: G
                })
            }
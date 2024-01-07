            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("834022");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("353575"),
                r = s("296839"),
                o = s("348934"),
                d = s("449008"),
                u = s("431451"),
                c = s("772871"),
                E = s("766829"),
                _ = s("782340"),
                T = s("544067");

            function I() {
                let e = "• ";
                return (0, a.jsxs)("div", {
                    className: T.changelog,
                    children: [(0, a.jsx)("img", {
                        className: T.changelogImage,
                        src: s("195238"),
                        alt: "changelog"
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            className: T.updatesHeader,
                            children: _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_HEADER
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: T.updatesDescription,
                            children: _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_1
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: T.updatesDescription,
                            children: _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_2
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_1]
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_2]
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_3]
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [e, _.default.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_4]
                        })]
                    })]
                })
            }

            function S(e) {
                let {
                    title: t,
                    subtitle: s,
                    icon: n,
                    page: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: T.safetyStepRow,
                    children: [(0, a.jsxs)("div", {
                        className: T.safetyStepContent,
                        children: [(0, a.jsx)(l.Avatar, {
                            src: n,
                            size: l.AvatarSizes.SIZE_40,
                            "aria-label": t
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: t
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: s
                            })]
                        })]
                    }), (0, a.jsx)(l.Button, {
                        className: T.editButton,
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.OUTLINED,
                        borderColor: l.Button.BorderColors.PRIMARY,
                        onClick: () => (0, u.setSafetyPage)(i),
                        children: _.default.Messages.EDIT
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    hideChangelog: u
                } = e;
                (0, i.useSyncAutomodRulesEffect)(t.id);
                let N = (0, r.useAvailableTriggerTypes)(t.id),
                    {
                        rulesByTriggerType: g
                    } = (0, i.useAutomodRulesList)(t.id),
                    {
                        numEnabledRules: f,
                        numRules: A
                    } = n.useMemo(() => {
                        let e = 0,
                            t = 0;
                        if (null == g) return {
                            numEnabledRules: e,
                            numRules: t
                        };
                        let s = Object.values(N).flat();
                        return s.forEach(s => {
                            var a;
                            let n = null === (a = g[s]) || void 0 === a ? void 0 : a.filter(d.isNotNullish);
                            if (null == n || 0 === n.length) {
                                t++;
                                return
                            }
                            n.forEach(s => {
                                s.enabled && e++, t++
                            })
                        }), {
                            numEnabledRules: e,
                            numRules: t
                        }
                    }, [N, g]),
                    L = (0, E.getGuildSafetySettings)(t),
                    m = L[c.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION],
                    C = L[c.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION],
                    O = L[c.GuildSettingsSafetyPage.PERMISSIONS],
                    h = (0, o.useCanCurrentUserManageAutomod)(t.id);
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: T.header,
                        children: _.default.Messages.GUILD_SETTINGS_SAFETY_SETUP_HEADER
                    }), !u && (0, a.jsx)(I, {}), (0, a.jsxs)("div", {
                        className: T.safetyChecklist,
                        children: [(0, a.jsx)(S, {
                            icon: s("373558"),
                            title: _.default.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
                            subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
                                enabled: m.filter(e => e.enabled).length,
                                total: m.length
                            }),
                            page: c.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION
                        }), (0, a.jsx)("div", {
                            className: T.divider
                        }), (0, a.jsx)(S, {
                            icon: s("119134"),
                            title: _.default.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
                            subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
                                enabled: C.filter(e => e.enabled).length,
                                total: C.length
                            }),
                            page: c.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION
                        }), (0, a.jsx)("div", {
                            className: T.divider
                        }), h && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(S, {
                                icon: s("799036"),
                                title: _.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
                                subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
                                    enabled: f,
                                    total: A
                                }),
                                page: c.GuildSettingsSafetyPage.AUTOMOD
                            }), (0, a.jsx)("div", {
                                className: T.divider
                            })]
                        }), (0, a.jsx)(S, {
                            icon: s("444964"),
                            title: _.default.Messages.PERMISSIONS,
                            subtitle: _.default.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
                                enabled: O.filter(e => e.enabled).length,
                                total: O.length
                            }),
                            page: c.GuildSettingsSafetyPage.PERMISSIONS
                        })]
                    })]
                })
            }
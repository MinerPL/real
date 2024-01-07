            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("151426"),
                r = s("77078"),
                o = s("10641"),
                d = s("329606"),
                u = s("305961"),
                c = s("137215"),
                E = s("900938"),
                _ = s("431451"),
                T = s("353830"),
                I = s("772871"),
                S = s("900084"),
                N = s("860170"),
                g = s("766829"),
                f = s("994428"),
                A = s("782340"),
                L = s("642622");

            function m(e) {
                let t, {
                        hideChangelog: s
                    } = e,
                    m = (0, l.useStateFromStores)([E.default], () => E.default.getGuildId()),
                    C = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(m)),
                    O = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentPage());
                if (n.useEffect(() => {
                        (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY, {
                            dismissAction: f.ContentDismissActionType.AUTO
                        })
                    }, []), null == C) return null;
                let h = (0, g.getGuildSafetySettings)(C);
                switch (O) {
                    case I.GuildSettingsSafetyPage.OVERVIEW:
                        t = (0, a.jsx)(S.default, {
                            guild: C,
                            hideChangelog: s
                        });
                        break;
                    case I.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION:
                        t = (0, a.jsx)(N.default, {
                            title: A.default.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
                            settings: h[I.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION]
                        });
                        break;
                    case I.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION:
                        t = (0, a.jsx)(N.default, {
                            title: A.default.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
                            settings: h[I.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION]
                        });
                        break;
                    case I.GuildSettingsSafetyPage.AUTOMOD:
                        t = (0, a.jsx)(d.default, {
                            guildId: C.id
                        });
                        break;
                    case I.GuildSettingsSafetyPage.PERMISSIONS:
                        t = (0, a.jsx)(N.default, {
                            title: A.default.Messages.GUILD_SETTINGS_SAFETY_PERMISSIONS_TITLE,
                            settings: h[I.GuildSettingsSafetyPage.PERMISSIONS]
                        })
                }
                return (0, a.jsxs)(a.Fragment, {
                    children: [O !== I.GuildSettingsSafetyPage.OVERVIEW && (0, a.jsxs)(r.Button, {
                        className: L.back,
                        innerClassName: L.backButton,
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        onClick: () => {
                            (0, _.setSafetyPage)(I.GuildSettingsSafetyPage.OVERVIEW)
                        },
                        children: [(0, a.jsx)(c.default, {
                            className: L.arrow,
                            direction: c.default.Directions.LEFT
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: A.default.Messages.BACK
                        })]
                    }), t]
                })
            }
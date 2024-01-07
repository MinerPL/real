            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("917351"),
                l = s("446674"),
                i = s("77078"),
                r = s("79112"),
                o = s("957255"),
                d = s("697218"),
                u = s("592407"),
                c = s("690343"),
                E = s("49111"),
                _ = s("782340"),
                T = s("642622");

            function I(e) {
                let t, {
                        guild: s
                    } = e,
                    I = s.mfaLevel,
                    S = (0, l.useStateFromStores)([o.default], () => null != s && o.default.can(E.Permissions.MANAGE_GUILD, s), [s]),
                    N = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
                    g = s.isOwner(N),
                    f = null == N ? void 0 : N.mfaEnabled,
                    A = I === E.MFALevels.ELEVATED,
                    L = g && f,
                    m = (0, n.throttle)(async e => {
                        L && await u.default.updateMFALevel({
                            guildId: s.id,
                            level: e ? E.MFALevels.ELEVATED : E.MFALevels.NONE,
                            isEnabled: !e
                        })
                    }, 1e3);
                if (!S) return null;
                !L && (t = g ? _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_DETAIL.format({
                    settingsHook: () => r.default.open(E.UserSettingsSections.ACCOUNT)
                }) : _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_DETAIL);
                let C = s.hasFeature(E.GuildFeatures.DISCOVERABLE);
                return (0, a.jsxs)("div", {
                    className: T.simpleItemWrapper,
                    children: [(0, a.jsxs)("div", {
                        className: T.itemContent,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: _.default.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
                        }), (0, a.jsxs)(i.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [_.default.Messages.GUILD_SETTINGS_SAFETY_MFA_BODY, " ", t]
                        })]
                    }), !L || A && C ? (0, a.jsx)(i.Tooltip, {
                        text: C ? _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_DISCOVERABLE_DISABLED_TOOLTIP : g ? _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_TOOLTIP : _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_TOOLTIP,
                        children: e => (0, a.jsx)(c.default, {
                            checked: A,
                            disabled: !0,
                            onChange: m,
                            className: T.bringToFront,
                            tooltipProps: e
                        })
                    }) : (0, a.jsx)(c.default, {
                        checked: A,
                        onChange: m,
                        className: T.bringToFront
                    })]
                })
            }
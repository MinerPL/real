            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("65597"),
                i = s("77078"),
                r = s("817674"),
                o = s("957255"),
                d = s("841803"),
                u = s("49111"),
                c = s("782340"),
                E = s("297716");

            function _(e) {
                let {
                    guild: t
                } = e, s = n.useId(), _ = (0, l.default)([o.default], () => null != t && o.default.can(u.Permissions.MANAGE_GUILD, t), [t]), T = t.hasFeature(u.GuildFeatures.COMMUNITY), [I, S] = n.useState(t.hasFeature(u.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), N = n.useCallback(async e => {
                    S(e), await (0, r.toggleModerationExperienceGuildFeature)(t, e)
                }, [t]);
                return T ? null : (0, a.jsxs)("div", {
                    className: E.bannerContainer,
                    children: [(0, a.jsx)(d.default, {
                        width: 64,
                        height: 64
                    }), (0, a.jsxs)("div", {
                        className: E.headingContainer,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            children: c.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
                        })]
                    }), (0, a.jsx)("div", {
                        className: E.buttonContainer,
                        children: (0, a.jsx)(i.Switch, {
                            id: s,
                            checked: I,
                            onChange: N,
                            disabled: !_
                        })
                    })]
                })
            }
            "use strict";
            s.r(t), s.d(t, {
                useIsChecked: function() {
                    return u
                },
                useIsDisabled: function() {
                    return c
                },
                useDisabledTooltip: function() {
                    return E
                },
                useTooltip: function() {
                    return _
                }
            });
            var a = s("446674"),
                n = s("42203"),
                l = s("305961"),
                i = s("991170"),
                r = s("653274"),
                o = s("49111"),
                d = s("782340");

            function u(e, t) {
                return (0, a.useStateFromStores)([r.default], () => r.default.editedDefaultChannelIds.has(e) || null != t && r.default.editedDefaultChannelIds.has(t))
            }

            function c(e, t) {
                return (0, a.useStateFromStores)([r.default], () => e === t || null != t && r.default.editedDefaultChannelIds.has(t))
            }

            function E(e, t) {
                return (0, a.useStateFromStores)([r.default, n.default], () => null != t && r.default.editedDefaultChannelIds.has(t) ? d.default.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY : i.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, n.default.getChannel(e)) ? void 0 : d.default.Messages.DEFAULT_CHANNELS_DISABLED_PRIVATE)
            }

            function _(e, t) {
                let s = (0, a.useStateFromStores)([l.default], () => {
                        var s;
                        return (null === (s = l.default.getGuild(e)) || void 0 === s ? void 0 : s.rulesChannelId) === t
                    }),
                    i = (0, a.useStateFromStores)([n.default], () => {
                        var e;
                        return null === (e = n.default.getChannel(t)) || void 0 === e ? void 0 : e.isGuildVocal()
                    });
                return s ? d.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RULES_DISCOURAGED : i ? d.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_VOICE_TOOLTIP : void 0
            }
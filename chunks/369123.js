            "use strict";
            i.r(t), i.d(t, {
                useGuildSettingsPickerFeature: function() {
                    return S
                }
            }), i("222007");
            var l = i("884691"),
                s = i("446674"),
                u = i("86290"),
                a = i("129428"),
                n = i("565797"),
                d = i("957255"),
                r = i("782340");
            let o = {
                    "server-subscriptions-onboarding": n.default,
                    "server-subscriptions-finish-setting-up": a.default,
                    "server-subscriptions-create-tier-from-template": u.default
                },
                c = {
                    title: () => r.default.Messages.GUILD_SETTINGS_PICKER_DEFAULT_TITLE,
                    description: () => r.default.Messages.GUILD_SETTINGS_PICKER_DEFAULT_DESCRIPTION,
                    selectGuildCta: () => r.default.Messages.GET_STARTED,
                    createGuildDescription: () => r.default.Messages.GUILD_SETTINGS_PICKER_DEFAULT_CREATE_DESCRIPTION,
                    createGuildCta: () => r.default.Messages.CREATE_SERVER_BUTTON_CTA,
                    canCreateGuild: !0,
                    useIsGuildSupported: () => (0, s.useStateFromStores)([d.default], () => e => d.default.canAccessGuildSettings(e), [], s.statesWillNeverBeEqual)
                };

            function S(e) {
                var t;
                let [i] = l.useState(null == e ? void 0 : o[e]), s = c.useIsGuildSupported(), u = null == i ? void 0 : null === (t = i.useIsGuildSupported) || void 0 === t ? void 0 : t.call(i), a = {
                    ...c,
                    ...null != i ? i : {}
                };
                return {
                    title: a.title(),
                    description: a.description(),
                    selectGuildCta: a.selectGuildCta(),
                    createGuildDescription: a.createGuildDescription(),
                    createGuildCta: a.createGuildCta(),
                    canCreateGuild: a.canCreateGuild,
                    isGuildSupported: (e, t) => s(e, t) && (null == u ? void 0 : u(e, t)) !== !1
                }
            }
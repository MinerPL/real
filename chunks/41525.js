            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("669491"),
                r = s("77078"),
                o = s("70614"),
                d = s("898065"),
                u = s("84460"),
                c = s("655151"),
                S = s("686470"),
                E = s("167726"),
                f = s("956089"),
                T = s("306160"),
                m = s("701909"),
                _ = s("773336"),
                g = s("50885"),
                h = s("845579"),
                I = s("271445"),
                N = s("49111"),
                p = s("782340"),
                C = s("393149");

            function A() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getIsEnabled(), []),
                    {
                        enabled: t
                    } = c.ExperimentDevelopersGetDeveloperShelf.useExperiment({
                        location: "UserSettingsAdvanced"
                    }),
                    [s] = n.useState(() => g.default.getEnableHardwareAcceleration()),
                    A = h.DisableGamesTab.useSetting(),
                    O = h.DeveloperMode.useSetting(),
                    x = h.DisableHomeAutoNav.useSetting(),
                    {
                        hasLibraryApplication: R,
                        testModeApplicationId: M
                    } = (0, l.useStateFromStoresObject)([E.default, S.default], () => ({
                        hasLibraryApplication: S.default.hasLibraryApplication(),
                        testModeApplicationId: E.default.testModeApplicationId
                    })),
                    v = n.useCallback(e => {
                        h.DisableGamesTab.updateSetting(!e)
                    }, []),
                    D = n.useCallback(e => {
                        e ? (0, r.openModal)(e => (0, a.jsx)(I.default, {
                            ...e
                        })) : o.reset()
                    }, []),
                    L = n.useCallback(e => {
                        (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
                            header: p.default.Messages.SWITCH_HARDWARE_ACCELERATION,
                            confirmText: p.default.Messages.OKAY,
                            cancelText: p.default.Messages.CANCEL,
                            onConfirm: () => g.default.setEnableHardwareAcceleration(e),
                            ...t,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: p.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
                            })
                        }))
                    }, []),
                    P = n.useCallback(e => {
                        h.DisableHomeAutoNav.updateSetting(!e)
                    }, []);
                return (0, a.jsxs)(r.FormSection, {
                    tag: r.FormTitleTags.H1,
                    title: p.default.Messages.SETTINGS_ADVANCED,
                    children: [T.SUPPORTS_COPY && (0, a.jsx)(r.FormSwitch, {
                        value: O,
                        onChange: h.DeveloperMode.updateSetting,
                        note: p.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
                            apiDocsUrl: N.MarketingURLs.API_DOCS
                        }),
                        children: p.default.Messages.DEVELOPER_MODE
                    }), _.isPlatformEmbedded && (0, a.jsx)(r.FormSwitch, {
                        value: s,
                        onChange: L,
                        note: p.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
                        children: p.default.Messages.HARDWARE_ACCELERATION
                    }), R && (0, a.jsx)(r.FormSwitch, {
                        value: !A,
                        onChange: v,
                        note: p.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
                        children: p.default.Messages.USER_SETTINGS_SHOW_LIBRARY
                    }), O && (0, a.jsx)(r.FormSwitch, {
                        value: null != M,
                        note: p.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
                        onChange: D,
                        children: p.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
                    }), O && !t ? (0, a.jsx)(r.FormSwitch, {
                        value: e,
                        note: p.default.Messages.DEVELOPER_ACTIVITY_SHELF_NOTE,
                        onChange: d.toggleEnableDeveloperActivityShelf,
                        children: p.default.Messages.DEVELOPER_ACTIVITY_SHELF
                    }) : null, (0, a.jsx)(r.FormSwitch, {
                        value: !x,
                        note: p.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
                            helpCenterLink: m.default.getArticleURL(N.HelpdeskArticles.GUILD_HOME)
                        }),
                        onChange: P,
                        children: (0, a.jsxs)("div", {
                            className: C.badgedItem,
                            children: [p.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(f.TextBadge, {
                                text: p.default.Messages.BETA,
                                color: i.default.unsafe_rawColors.BRAND_500.css,
                                className: C.betaTag
                            })]
                        })
                    })]
                })
            }
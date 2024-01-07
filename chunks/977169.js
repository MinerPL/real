            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                },
                ViewingRolesSettingsNotice: function() {
                    return L
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                l = n("446674"),
                a = n("669491"),
                o = n("77078"),
                u = n("921031"),
                c = n("471706"),
                d = n("937692"),
                f = n("432153"),
                p = n("592407"),
                _ = n("393414"),
                m = n("18494"),
                E = n("162771"),
                I = n("246053"),
                h = n("461380"),
                C = n("423487"),
                S = n("489622"),
                g = n("773336"),
                T = n("479756"),
                N = n("38654"),
                A = n("593916"),
                v = n("49111"),
                R = n("724210"),
                O = n("782340"),
                x = n("494449");

            function D(e) {
                let {
                    className: t,
                    onClick: n,
                    children: i
                } = e;
                return (0, r.jsx)(o.Button, {
                    className: s(x.button, t),
                    innerClassName: x.buttonInner,
                    look: o.Button.Looks.OUTLINED,
                    color: o.Button.Colors.WHITE,
                    size: o.Button.Sizes.NONE,
                    onClick: n,
                    children: i
                })
            }

            function b(e) {
                let {
                    onClick: t
                } = e;
                return (0, r.jsx)(D, {
                    onClick: t,
                    children: O.default.Messages.DISABLE
                })
            }

            function M() {
                let e = (0, l.useStateFromStores)([E.default], () => E.default.getGuildId()),
                    t = (0, l.useStateFromStores)([m.default], () => m.default.getChannelId(e)),
                    {
                        viewingRoles: n,
                        backNavigationSection: i,
                        isFullServerPreview: s
                    } = (0, l.useStateFromStoresObject)([N.default], () => ({
                        viewingRoles: null != e ? N.default.getViewingRoles(e) : null,
                        backNavigationSection: N.default.getBackNavigationSection(e),
                        isFullServerPreview: null != e && N.default.isFullServerPreview(e)
                    }));
                if (null == n || null == e) return null;
                let g = function(e) {
                        switch (e) {
                            case v.GuildSettingsSections.INTEGRATIONS:
                                return O.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
                            case v.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
                                return O.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
                            case v.GuildSettingsSections.ONBOARDING:
                                return O.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
                            default:
                                return O.default.Messages.VIEWING_AS_ROLES_BACK
                        }
                    }(i),
                    M = i === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? O.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : O.default.Messages.VIEWING_AS_ROLES_SELECT,
                    L = t === R.StaticChannelRoute.GUILD_ONBOARDING,
                    y = t => {
                        let {
                            backToSettings: n
                        } = t;
                        null != e && (N.default.isFullServerPreview(e) && (0, _.transitionTo)(v.Routes.CHANNEL(e)), c.default.shouldShowOnboarding(e) && (u.default.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && p.default.open(e, i), i === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
                    };
                return (0, r.jsxs)(S.default, {
                    color: S.NoticeColors.BRAND,
                    className: x.notice,
                    children: [(0, r.jsxs)(D, {
                        onClick: () => y({
                            backToSettings: !0
                        }),
                        className: x.backButton,
                        children: [(0, r.jsx)(I.default, {
                            width: 16,
                            height: 16,
                            direction: I.default.Directions.LEFT,
                            className: x.backArrow
                        }), g]
                    }), L && s ? (0, r.jsx)("div", {
                        className: x.noticeContents,
                        children: (0, r.jsx)("div", {
                            className: x.noticeText,
                            children: O.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
                        })
                    }) : (0, r.jsxs)("div", {
                        className: x.noticeContents,
                        children: [(0, r.jsx)("div", {
                            className: x.noticeText,
                            children: s ? O.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
                                numRoles: Object.keys(n).length
                            }) : O.default.Messages.VIEWING_AS_ROLES.format({
                                numRoles: Object.keys(n).length
                            })
                        }), (0, r.jsx)(o.Popout, {
                            position: "bottom",
                            renderPopout: () => (0, r.jsx)(A.default, {
                                guildId: e
                            }),
                            children: e => {
                                let {
                                    onClick: t
                                } = e;
                                return (0, r.jsxs)(D, {
                                    onClick: t,
                                    children: [M, (0, r.jsx)(h.default, {
                                        width: 16,
                                        height: 16,
                                        direction: h.default.Directions.DOWN,
                                        className: x.selectCaret
                                    })]
                                })
                            }
                        }), s ? (0, r.jsx)(o.TooltipContainer, {
                            className: x.previewWarning,
                            text: O.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                            children: (0, r.jsx)(C.default, {
                                width: 16,
                                height: 16,
                                color: a.default.unsafe_rawColors.YELLOW_300.css
                            })
                        }) : null]
                    }), s || i === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, {
                        onClick: () => y({
                            backToSettings: !1
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    guildId: t
                } = e, n = (0, l.useStateFromStores)([N.default], () => N.default.isViewingRoles(t));
                return n ? (0, r.jsx)("div", {
                    className: s(x.settingsWrapper, {
                        [x.windows]: (0, g.isWindows)(),
                        [x.osx]: (0, g.isMac)()
                    }),
                    children: (0, r.jsx)(M, {})
                }) : null
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("545158"),
                o = s("7331"),
                d = s("615303"),
                u = s("827159"),
                c = s("963393"),
                E = s("719887"),
                _ = s("697218"),
                T = s("471671"),
                I = s("37785"),
                S = s("599110"),
                N = s("837008"),
                g = s("757715"),
                f = s("352807"),
                A = s("417186"),
                L = s("441901"),
                m = s("341020"),
                C = s("49111"),
                O = s("988268"),
                h = s("810367"),
                R = s("782340"),
                D = s("847007");

            function M(e) {
                let {
                    onCreateTeamClick: t,
                    isGuildOwner: s
                } = e;
                return (0, a.jsx)("div", {
                    className: D.selectTeamContainer,
                    children: (0, a.jsx)(i.Button, {
                        disabled: !s,
                        onClick: t,
                        className: D.enableTicketingButton,
                        fullWidth: !0,
                        children: R.default.Messages.GUILD_MONETIZATION_ENABLE_CREATE_TEAM
                    })
                })
            }

            function G(e) {
                let {
                    guild: t,
                    eligibleTeams: s,
                    isGuildOwner: l
                } = e, [r, o] = n.useState(), {
                    enableGuildMonetizationForTeam: u,
                    submitting: c,
                    error: E
                } = (0, d.default)(), {
                    fetchSubscriptionsSettings: _
                } = (0, N.useFetchSubscriptionsSettings)(), T = (0, g.useRoleSubscriptionSettingsDisabled)(), I = n.useMemo(() => s.map(e => ({
                    label: e.name,
                    value: e.id
                })), [s]), S = async () => {
                    let e = await u(t, r, O.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
                    e && (_(t.id), (0, f.openActionCompleteSuccessModal)({
                        Icon: m.default,
                        title: R.default.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_TITLE,
                        body: R.default.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_SUBTITLE
                    }))
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: D.selectTeamContainer,
                        children: [(0, a.jsx)(i.SingleSelect, {
                            className: D.teamSelect,
                            options: I,
                            placeholder: R.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                            value: r,
                            isDisabled: 0 === I.length || T || !l,
                            onChange: e => o(e),
                            "aria-label": R.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
                        }), (0, a.jsx)(i.Button, {
                            onClick: S,
                            className: D.enableTicketingButton,
                            submitting: c,
                            disabled: null == r || T || !l,
                            children: R.default.Messages.GUILD_MONETIZATION_ENABLE_CTA
                        })]
                    }), null != E && (0, a.jsx)(i.Text, {
                        className: D.error,
                        variant: "text-sm/normal",
                        children: E.getAnyErrorMessage()
                    })]
                })
            }
            var x = e => {
                let {
                    guild: t,
                    hideDisableSection: s = !1
                } = e, d = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()), N = t.isOwner(d), g = (0, o.useIsExpeditedOnboardingGuild)(t), f = (0, l.useStateFromStores)([T.default], () => T.default.isFocused()), {
                    teams: m,
                    loading: O
                } = (0, E.default)({
                    refreshOnDepChange: f
                }), x = n.useMemo(() => m.filter(e => {
                    var t;
                    return e.payout_account_status !== h.PayoutAccountStatuses.BLOCKED && (0, c.isUserTeamAdministrator)(null !== (t = null == d ? void 0 : d.id) && void 0 !== t ? t : "", e)
                }), [m, d]), p = x.length > 0, U = n.useCallback(async () => {
                    S.default.track(C.AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                        is_onboarding_v2: g,
                        has_eligible_team: p,
                        guild_id: t.id,
                        is_owner: N
                    });
                    let e = await (0, u.generateDeveloperPortalLink)(C.RelativeMarketingURLs.DEVELOPER_PORTAL_TEAMS);
                    (0, r.default)(e)
                }, [t, N, g, p]), v = n.useCallback(e => N ? (0, a.jsx)(I.default, {
                    onClick: U,
                    children: e
                }) : e, [U, N]);
                return O ? (0, a.jsx)(i.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
                    children: [!N && (0, a.jsx)(A.default, {
                        className: D.nonOwnerNotice,
                        children: R.default.Messages.GUILD_MONETIZATION_ENABLE_NON_OWNER_WARNING
                    }), (0, a.jsxs)(i.FormSection, {
                        title: R.default.Messages.GUILD_MONETIZATION_ENABLE_HEADER,
                        disabled: !N,
                        children: [(0, a.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: D.description,
                            disabled: !N,
                            children: R.default.Messages.GUILD_MONETIZATION_ENABLE_DESCRIPTION.format({
                                onCreateTeamHook: v
                            })
                        }), p ? (0, a.jsx)(G, {
                            guild: t,
                            eligibleTeams: x,
                            isGuildOwner: N
                        }) : (0, a.jsx)(M, {
                            onCreateTeamClick: U,
                            isGuildOwner: N
                        })]
                    }), !s && (0, a.jsx)(i.FormSection, {
                        title: R.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
                        className: D.selfDemonetization,
                        children: (0, a.jsx)(L.default, {
                            guildId: t.id,
                            allPeriods: []
                        })
                    })]
                })
            }
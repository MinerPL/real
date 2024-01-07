            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s("65597"),
                d = s("266491"),
                u = s("77078"),
                c = s("45299"),
                E = s("900938"),
                _ = s("965397"),
                T = s("191814"),
                I = s("351825"),
                S = s("858560"),
                N = s("808388"),
                g = s("837008"),
                f = s("719726"),
                A = s("757715"),
                L = s("167109"),
                m = s("172589"),
                C = s("49111"),
                O = s("782340"),
                h = s("514465");
            let R = "guild-role-subscription-tier-template-selector",
                D = e => {
                    let [t, s] = n.useState(!0), [a, l] = n.useState();
                    return n.useEffect(() => {
                        s(!0), (0, f.getPriceTiers)(e).then(e => {
                            l(e), s(!1)
                        })
                    }, [e]), {
                        loading: t,
                        priceTiers: a
                    }
                };

            function M(e) {
                let {
                    guildId: t,
                    priceTiers: l,
                    groupListingId: T
                } = e, f = (0, g.useSubscriptionListingsForGroup)(T), {
                    editStateIds: D,
                    addNewEditStateId: M,
                    addNewEditStateFromTemplate: G,
                    removeEditStateId: x
                } = L.useEditStateIds(T, t, {
                    includeSoftDeleted: !0
                }), [p, U] = n.useState({}), v = n.useMemo(() => {
                    let e = D.map(e => {
                        var t;
                        return null !== (t = p[e]) && void 0 !== t ? t : e
                    });
                    return (0, r.uniq)(e)
                }, [D, p]), j = (e, t) => {
                    U(s => ({
                        ...s,
                        [e]: t
                    }))
                }, P = (0, N.useGuildEligibleForTierTemplates)(t), y = (0, N.useUserEligibleForTierTemplates)(), b = n.useCallback(() => {
                    y && S.GuildRoleSubscriptionsTierTemplatesExperiment.trackExposure({
                        guildId: t,
                        location: "b2d9de_1"
                    }), y && P ? (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("183424").then(s.bind(s, "183424"));
                        return s => (0, a.jsx)(e, {
                            ...s,
                            guildId: t,
                            addNewEditStateFromTemplate: G,
                            addNewEditStateFromScratch: M,
                            priceTiers: l
                        })
                    }, {
                        modalKey: R
                    }) : M()
                }, [t, G, M, l, y, P]), B = L.useHasChangesForEditStateIds(v), F = n.useCallback(() => v.forEach(L.clearEditState), [v]), H = (0, A.useRoleSubscriptionSettingsDisabled)(), V = (0, o.default)([E.default], () => E.default.getProps().subsection);
                return n.useEffect(() => (V === C.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIER_TEMPLATE && b(), () => {
                    (0, u.closeModal)(R)
                }), [V, b]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: h.groupListings,
                        children: [v.map(e => (0, a.jsx)(m.default, {
                            guildId: t,
                            initialEditStateId: e,
                            allSubscriptionListings: f,
                            priceTiers: l,
                            groupListingId: T,
                            onDeleteEditState: () => x(e),
                            onBeforeDispatchNewListing: t => j(t.id, e),
                            onAfterDispatchNewListing: () => x(e)
                        }, e)), (0, a.jsxs)(u.Clickable, {
                            onClick: H ? void 0 : b,
                            className: i(h.createTierButton, {
                                [h.disabled]: H
                            }),
                            "aria-disabled": H,
                            children: [(0, a.jsx)(I.default, {
                                className: h.createTierIcon
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-active",
                                children: O.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_CARD_CREATE
                            })]
                        })]
                    }), (0, a.jsx)(d.default, {
                        component: "div",
                        className: h.contentRegion,
                        children: B && (0, a.jsx)(_.default, {
                            children: (0, a.jsx)(c.default, {
                                onReset: F
                            })
                        })
                    })]
                })
            }

            function G(e) {
                let {
                    guildId: t
                } = e, {
                    priceTiers: s
                } = D(t), n = (0, g.useGroupListingsForGuild)(t), {
                    maxTiers: l
                } = (0, N.useRoleSubscriptionMaxTiersExperiment)(t), i = n.map(e => e.id);
                return (0, a.jsxs)(u.FormSection, {
                    title: O.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_TITLE,
                    className: h.container,
                    children: [(0, a.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        children: O.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_DESCRIPTION.format({
                            maxTiers: l
                        })
                    }), (0, a.jsx)(T.default, {
                        size: 16
                    }), (0, a.jsx)(M, {
                        priceTiers: s,
                        guildId: t,
                        groupListingId: i[0]
                    })]
                })
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("446674"),
                u = s("77078"),
                c = s("449918"),
                E = s("191814"),
                _ = s("987772"),
                T = s("956089"),
                I = s("153160"),
                S = s("577357"),
                N = s("837008"),
                g = s("648825"),
                f = s("757715"),
                A = s("406876"),
                L = s("167109"),
                m = s("110498"),
                C = s("21501"),
                O = s("49111"),
                h = s("782340"),
                R = s("332227");

            function D(e) {
                var t, s;
                let {
                    guildId: l,
                    initialEditStateId: r,
                    allSubscriptionListings: D,
                    priceTiers: M,
                    onDeleteEditState: G,
                    groupListingId: x,
                    onBeforeDispatchNewListing: p,
                    onAfterDispatchNewListing: U
                } = e, [v, j] = n.useState(r), P = (0, d.useStateFromStores)([g.default], () => g.default.getSubscriptionListing(v)), y = null == P, [b, B] = n.useState(y), F = null == P ? void 0 : P.subscription_plans[0], H = null !== (t = null == P ? void 0 : P.published) && void 0 !== t && t, V = null !== (s = null == P ? void 0 : P.archived) && void 0 !== s && s, k = (0, f.useRoleSubscriptionSettingsDisabled)(), [w] = L.useName(v), [Y] = L.usePriceTier(v), [K] = L.useDescription(v), [W] = L.useImage(v, 1024), z = "" !== w ? w : h.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INITIAL_TIER_NAME, X = "" !== w && null != W && "" !== K && null != Y && !k, Z = L.useHasChanges(v), {
                    loading: J,
                    error: Q,
                    handleCreateOrUpdateFromEditState: q
                } = L.useCreateOrUpdateListingFromEditState(), {
                    submitting: $,
                    error: ee,
                    publishSubscriptionListing: et
                } = (0, N.usePublishSubscriptionListing)(), es = J || $;
                return (0, a.jsxs)("div", {
                    className: R.container,
                    children: [(0, a.jsxs)("div", {
                        className: i(R.header, {
                            [R.headerExpanded]: b
                        }),
                        children: [(0, a.jsx)("div", {
                            className: R.headerImageContainer,
                            children: null == W ? (0, a.jsx)(m.default, {
                                className: R.starIcon,
                                "aria-hidden": !0
                            }) : (0, a.jsx)("img", {
                                className: R.headerImage,
                                src: W,
                                alt: z
                            })
                        }), (0, a.jsxs)("div", {
                            className: R.headerListingInfo,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: z
                            }), (0, a.jsx)(E.default, {
                                size: 2
                            }), (0, a.jsxs)("div", {
                                className: R.headerDescriptionContainer,
                                children: [!V && !H && void 0 !== P && (0, a.jsx)(T.TextBadge, {
                                    color: (0, c.getColor)(O.Color.YELLOW_300),
                                    text: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_DRAFT_LABEL,
                                    className: R.draftBadge
                                }), V && (0, a.jsx)(T.TextBadge, {
                                    color: (0, c.getColor)(O.Color.PRIMARY_500),
                                    text: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
                                    className: R.archivedBadge
                                }), void 0 === P && (0, a.jsx)(T.TextBadge, {
                                    color: (0, c.getColor)(O.Color.PRIMARY_500),
                                    text: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_UNSAVED_LABEL,
                                    className: R.unsavedBadge
                                }), null != F && (0, a.jsxs)(u.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    children: [(0, I.formatPrice)(F.price, F.currency), "/", (0, S.formatPlanInterval)(F)]
                                })]
                            })]
                        }), b ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.Button, {
                                look: u.Button.Looks.BLANK,
                                className: R.cancel,
                                onClick: () => {
                                    L.clearEditState(v), y ? null == G || G() : B(!1)
                                },
                                children: h.default.Messages.CANCEL
                            }), (0, a.jsx)(u.Button, {
                                onClick: () => q({
                                    guildId: l,
                                    editStateId: v,
                                    groupListingId: x,
                                    onBeforeDispatchNewListing: p,
                                    onAfterDispatchNewListing: e => {
                                        j(e.id), null == U || U(e)
                                    }
                                }),
                                disabled: !X || !Z,
                                className: R.autoWidth,
                                submitting: es,
                                children: h.default.Messages.SAVE
                            })]
                        }) : (0, a.jsx)(u.Clickable, {
                            onClick: () => B(!0),
                            "aria-label": h.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_EDIT_LABEL,
                            children: (0, a.jsx)(_.default, {
                                className: R.pencilIcon
                            })
                        })]
                    }), b && (0, a.jsx)(A.EditStateContextProvider, {
                        editStateId: v,
                        guildId: l,
                        groupListingId: x,
                        children: (0, a.jsx)(C.default, {
                            allSubscriptionListings: D,
                            priceTiers: M,
                            loading: es,
                            error: null != Q ? Q : ee,
                            handlePublishTier: () => {
                                o(null != x, "group listing doesnt exist"), o(null != P, "subscription listing doesnt exist"), et({
                                    guildId: l,
                                    groupListingId: x,
                                    listingId: P.id
                                })
                            },
                            onDeleteEditState: G
                        })
                    })]
                })
            }
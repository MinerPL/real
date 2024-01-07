            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                },
                ImportRoleCard: function() {
                    return S
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("461380"),
                o = s("682344"),
                d = s("271560"),
                u = s("577357"),
                c = s("757715"),
                E = s("701973"),
                _ = s("782340"),
                T = s("919686");

            function I(e) {
                let {
                    channelBenefits: t,
                    intangibleBenefits: s,
                    subscriptionListings: n,
                    onImport: r
                } = e, o = (0, c.useRoleSubscriptionSettingsDisabled)();
                return (0, a.jsx)("div", {
                    className: T.container,
                    children: n.map(e => (0, a.jsxs)("div", {
                        className: T.row,
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: null == e.image_asset ? void 0 : (0, d.getAssetURL)(e.application_id, e.image_asset, 512),
                            className: l(T.rowIcon, T.listingImage)
                        }), (0, a.jsxs)("div", {
                            className: T.rowBody,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                className: l(T.rowText, T.listingName),
                                children: e.name
                            }), (0, a.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_NUM_BENEFITS.format({
                                    channels: e.role_benefits.benefits.filter(u.isChannelBenefit).length,
                                    benefits: e.role_benefits.benefits.filter(u.isIntangibleBenefit).length
                                })
                            })]
                        }), (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.OUTLINED,
                            color: i.Button.Colors.PRIMARY,
                            onClick: () => {
                                var n;
                                return n = e, void(0, i.openModal)(e => (0, a.jsx)(E.ImportBenefitsFromSubscriptionListingModal, {
                                    ...e,
                                    fromSubscriptionListing: n,
                                    existingChannelBenefits: t,
                                    existingIntangibleBenefits: s,
                                    onSubmit: r
                                }))
                            },
                            disabled: o,
                            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_BUTTON
                        })]
                    }, e.id))
                })
            }

            function S(e) {
                let {
                    guildId: t,
                    onImport: s,
                    disabled: n = !1
                } = e;
                return (0, a.jsxs)(i.Clickable, {
                    className: l(T.importRoleCard, {
                        [T.disabled]: n
                    }),
                    onClick: n ? void 0 : function() {
                        (0, i.openModal)(e => (0, a.jsx)(E.ImportBenefitsFromRoleModal, {
                            ...e,
                            guildId: t,
                            onImport: s
                        }))
                    },
                    "aria-disabled": n,
                    children: [(0, a.jsx)(o.default, {
                        className: T.rowIcon
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        className: T.rowText,
                        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE
                    }), (0, a.jsx)(r.default, {
                        direction: r.default.Directions.RIGHT,
                        className: T.caret
                    })]
                })
            }
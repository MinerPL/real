            "use strict";
            s.r(t), s.d(t, {
                openModal: function() {
                    return I
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("866227"),
                i = s.n(l),
                r = s("77078"),
                o = s("850068"),
                d = s("812204"),
                u = s("685665"),
                c = s("476765"),
                S = s("271560"),
                E = s("837008"),
                f = s("108314"),
                T = s("677795"),
                m = s("782340"),
                _ = s("623777");
            let g = e => {
                    let [t, s] = n.useState(!1), [a, l] = n.useState(null), i = async t => {
                        try {
                            return s(!0), await o.cancelSubscription(t, e), !0
                        } catch (e) {
                            l(e)
                        } finally {
                            s(!1)
                        }
                    };
                    return {
                        cancelSubscription: i,
                        error: a,
                        submitting: t
                    }
                },
                h = e => {
                    var t;
                    let {
                        transitionState: s,
                        groupListing: n,
                        guildId: l,
                        listing: o,
                        subscription: h,
                        onClose: I
                    } = e, N = (0, c.useUID)(), p = (0, E.useSubscriptionsSettings)(l), C = (null == p ? void 0 : null === (t = p.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, S.getAssetURL)(p.cover_image_asset.application_id, p.cover_image_asset, 440) : void 0, {
                        analyticsLocations: A
                    } = (0, u.default)(d.default.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
                        cancelSubscription: O,
                        error: x,
                        submitting: R
                    } = g(A), M = async () => {
                        let e = await O(h.id);
                        e && I()
                    }, v = o.role_benefits.benefits.filter(e => e.ref_type === T.GuildRoleSubscriptionBenefitTypes.CHANNEL), D = o.role_benefits.benefits.filter(e => e.ref_type === T.GuildRoleSubscriptionBenefitTypes.INTANGIBLE), L = i(h.currentPeriodEnd).format("MMMM Do, YYYY"), P = m.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                        numChannels: v.length,
                        numAdditionalBenefits: D.length,
                        subscriptionEndDate: L
                    });
                    return (0, a.jsxs)(r.ModalRoot, {
                        transitionState: s,
                        className: _.modal,
                        "aria-labelledby": N,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("img", {
                                src: C,
                                alt: "",
                                className: _.headerImage
                            }), (0, a.jsx)(r.ModalCloseButton, {
                                withCircleBackground: !0,
                                className: _.closeButton,
                                onClick: I
                            })]
                        }), null != x ? (0, a.jsx)(r.FormErrorBlock, {
                            children: x.message
                        }) : null, (0, a.jsxs)(r.ModalContent, {
                            className: _.content,
                            children: [(0, a.jsx)(r.Heading, {
                                id: N,
                                variant: "text-md/medium",
                                className: _.title,
                                children: m.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
                            }), (0, a.jsx)(r.Text, {
                                className: _.description,
                                variant: "text-sm/normal",
                                children: P
                            }), (0, a.jsx)(f.GuildRoleSubscriptionBenefits, {
                                listingId: o.id,
                                guildId: n.guild_id,
                                className: _.benefits
                            })]
                        }), (0, a.jsxs)(r.ModalFooter, {
                            className: _.footer,
                            children: [(0, a.jsx)(r.Button, {
                                color: r.Button.Colors.RED,
                                onClick: M,
                                submitting: R,
                                children: m.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
                            }), (0, a.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.WHITE,
                                className: _.goBackButton,
                                onClick: I,
                                children: m.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
                            })]
                        })]
                    })
                },
                I = e => {
                    (0, r.openModal)(t => (0, a.jsx)(h, {
                        ...t,
                        ...e
                    }))
                }
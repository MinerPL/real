            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("627445"),
                n = a.n(s),
                i = a("759843"),
                r = a("446674"),
                d = a("77078"),
                o = a("812204"),
                u = a("428958"),
                c = a("17692"),
                m = a("750482"),
                f = a("305961"),
                x = a("191814"),
                h = a("565559"),
                g = a("928576"),
                j = a("999009"),
                v = a("875746"),
                _ = a("782340"),
                N = a("110899");

            function L(e) {
                var t, a;
                let {
                    transitionState: s,
                    guildProductListingId: L,
                    analyticsLocation: p,
                    guildId: I,
                    onClose: D
                } = e, C = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(L));
                n(null != C, "guildProductListing cannot be null"), (0, u.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: L,
                        has_entitlement: !0 === C.has_entitlement,
                        location: p
                    }
                });
                let M = null !== (t = (0, g.useProductType)(C)) && void 0 !== t ? t : "",
                    T = (0, g.usePrice)(C),
                    O = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(I));
                return (0, l.jsxs)(d.ModalRoot, {
                    className: N.modal,
                    size: d.ModalSize.MEDIUM,
                    transitionState: s,
                    "aria-label": C.name,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(m.MonetizationListingImageAspectStable, {
                            height: 267,
                            listing: C,
                            className: N.headerImage,
                            alt: ""
                        }), (0, l.jsx)(d.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: D,
                            withCircleBackground: !0
                        })]
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: N.body,
                            children: [(0, l.jsx)(d.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: C.name
                            }), (0, l.jsx)(x.default, {
                                size: 4
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: M,
                                    personName: null !== (a = null == O ? void 0 : O.name) && void 0 !== a ? a : ""
                                })
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)(j.default, {
                                listing: C
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)("div", {
                                className: N.seperator
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)(d.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, l.jsx)(x.default, {
                                size: 12
                            }), (0, l.jsx)(c.default, {
                                className: N.description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: C.description
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        className: N.footer,
                        children: [(0, l.jsx)(v.default, {
                            guildId: I,
                            guildProductListingId: L,
                            sourceAnalyticsLocations: o.default.GUILD_PRODUCT_INFO_MODAL
                        }), (0, l.jsx)(d.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: T
                        })]
                    })]
                })
            }
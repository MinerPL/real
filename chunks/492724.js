            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return T
                }
            });
            var a = A("37983");
            A("884691");
            var l = A("414456"),
                n = A.n(l),
                r = A("77078"),
                s = A("17692"),
                o = A("191814"),
                i = A("476765"),
                d = A("538137"),
                u = A("600785"),
                c = A("246421"),
                f = A("782340"),
                C = A("767165");

            function g(e) {
                let {
                    hidePurchaseToUnlockBadge: t,
                    className: A,
                    children: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: n(C.productThumbnailContainer, A),
                    children: [l, !t && (0, a.jsxs)("div", {
                        className: C.purchaseToUnlockBadge,
                        children: [(0, a.jsx)(u.default, {
                            className: C.lockIcon,
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: C.unlockText,
                            children: f.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
                        })]
                    })]
                })
            }

            function h(e) {
                let {
                    onShowFullDescription: t,
                    variant: A
                } = e, l = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.Text, {
                        variant: A,
                        color: null != t ? "text-link" : "interactive-hover",
                        children: f.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
                    }), (0, a.jsx)(d.default, {
                        className: C.arrowIcon,
                        backgroundColor: "currentColor",
                        width: 16,
                        height: 16
                    })]
                });
                return null == t ? (0, a.jsx)("div", {
                    className: C.showMoreButton,
                    children: l
                }) : (0, a.jsx)(r.Clickable, {
                    className: n(C.showMoreButton, C.hasAction),
                    onClick: e => {
                        e.stopPropagation(), null != t && t()
                    },
                    children: l
                })
            }

            function T(e) {
                let {
                    imageUrl: t,
                    name: A,
                    description: l,
                    formattedPrice: d,
                    role: u,
                    ctaComponent: T,
                    shouldShowFullDescriptionButton: m = !0,
                    onShowFullDescription: p,
                    productType: U,
                    onTapCard: I,
                    actionMenu: v,
                    showOpaqueBackground: E = !1,
                    hideRoleTag: x = !1,
                    lineClamp: N = 1,
                    cardWidth: q = 332,
                    cardHeight: O,
                    thumbnailHeight: R = 187,
                    descriptionTextVariant: L = "text-sm/normal"
                } = e, D = (0, i.uid)(), P = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g, {
                        hidePurchaseToUnlockBadge: !0,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            src: t,
                            className: C.productThumbnail,
                            style: {
                                height: R
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: C.productDetails,
                        children: [(0, a.jsxs)("div", {
                            className: C.productDetailContent,
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: C.productName,
                                id: D,
                                children: A
                            }), (0, a.jsx)(r.FocusBlock, {
                                children: (0, a.jsx)(s.default, {
                                    variant: L,
                                    color: "text-muted",
                                    lineClamp: N,
                                    text: l
                                })
                            }), m && (0, a.jsx)(h, {
                                onShowFullDescription: p,
                                variant: L
                            }), x || null == u || "" === u.name ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.default, {
                                    size: 16
                                }), (0, a.jsx)(c.default, {
                                    role: u
                                })]
                            })]
                        }), v]
                    }), (0, a.jsxs)("div", {
                        className: C.purchaseDetails,
                        children: [(0, a.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            className: C.productPrice,
                            children: null != d ? d : f.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xxs/normal",
                            color: "text-normal",
                            className: C.productType,
                            children: U
                        }), (0, a.jsx)("div", {
                            className: C.productActionButton,
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: T
                        })]
                    })]
                });
                return null == I ? (0, a.jsx)("article", {
                    className: n(C.productCard, E ? C.opaqueBackground : C.solidBackground),
                    "aria-labelledby": D,
                    children: P
                }) : (0, a.jsx)("div", {
                    style: {
                        width: q,
                        height: O
                    },
                    children: (0, a.jsx)(r.ClickableContainer, {
                        tag: "article",
                        "aria-label": f.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
                            productName: A
                        }),
                        className: n(C.productCard, E ? C.opaqueBackground : C.solidBackground, C.cardClickableContainer),
                        onClick: I,
                        children: P
                    })
                })
            }
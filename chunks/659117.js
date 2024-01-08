            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            }), r("794252");
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                s = r.n(n),
                u = r("506838"),
                i = r("446674"),
                l = r("77078"),
                o = r("491232"),
                c = r("984002"),
                d = r("716120"),
                E = r("915639"),
                _ = r("824563"),
                f = r("719923"),
                C = r("795158"),
                I = r("782340"),
                A = r("632000");
            let S = [{
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                p = e => {
                    let {
                        purchase: t
                    } = e, r = (0, i.useStateFromStores)([E.default], () => E.default.locale), n = (0, o.isPremiumCollectiblesPurchase)(t);
                    return (0, a.jsxs)("div", {
                        className: A.purchaseInfo,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [I.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), n && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("br", {}), I.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var h = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: n
                } = e, E = (0, i.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: h,
                    product: m,
                    purchase: T
                } = (0, c.default)(null == r ? void 0 : r.skuId), L = f.default.canUseCollectibles(t), O = (0, o.isPremiumCollectiblesPurchase)(T), v = (0, o.isPremiumCollectiblesProduct)(m), R = !L && O;
                return null != m && (null == T || R) ? (0, a.jsxs)("div", {
                    className: s(A.modalPreview, A.shopPreviewContainer, n),
                    children: [(0, a.jsx)(d.default, {
                        asset: null == h ? void 0 : h.banner,
                        className: A.shopPreviewBanner,
                        children: (0, a.jsx)(C.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, a.jsxs)("div", {
                        className: A.shopPreviewTextContainer,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: m.name
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: R ? I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, u.match)([v, L]).with([!0, !0], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
                        })]
                    })]
                }) : (0, a.jsxs)("div", {
                    className: s(A.modalPreview, n),
                    children: [(0, a.jsxs)("div", {
                        className: A.previewSections,
                        children: [(0, a.jsx)("div", {
                            className: A.decorationPreview,
                            children: (0, a.jsx)(C.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, a.jsx)("div", {
                            className: A.smallDecorationPreviewsContainer,
                            children: S.map(e => {
                                let {
                                    avatarSize: n,
                                    showStatus: s
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: A.smallDecorationPreview,
                                    children: (0, a.jsx)(C.default, {
                                        user: t,
                                        avatarSize: n,
                                        avatarDecorationOverride: r,
                                        status: s ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(n).concat(s))
                            })
                        })]
                    }), null != T && (0, a.jsx)(p, {
                        purchase: T
                    })]
                })
            }
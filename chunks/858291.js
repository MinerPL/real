            "use strict";
            n.r(t), n.d(t, {
                GuildProductListingPublicCard: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("65597"),
                l = n("801765"),
                i = n("228035"),
                r = n("465869"),
                o = n("305961"),
                u = n("306160"),
                d = n("442379"),
                c = n("757515"),
                f = n("727411"),
                m = n("492724"),
                E = n("928576"),
                _ = n("739726"),
                h = n("358404"),
                p = n("875746");

            function I(e) {
                var t;
                let {
                    guildProductListing: n,
                    guildId: I,
                    location: T,
                    shouldShowFullDescriptionButton: g = !0,
                    hideRoleTag: C = !1,
                    lineClamp: S = 1,
                    cardWidth: A,
                    cardHeight: N,
                    thumbnailHeight: M,
                    descriptionTextVariant: v = "text-sm/normal",
                    showOpaqueBackground: x = !1
                } = e, O = (0, s.default)([o.default], () => o.default.getGuild(I), [I]), L = null == O ? void 0 : O.roles[null !== (t = null == n ? void 0 : n.role_id) && void 0 !== t ? t : ""], R = (0, l.useListingThumbnailUrl)(n, 600), y = (0, E.useProductType)(n), P = (0, d.useCanManageGuildProduct)(O), {
                    shouldHideGuildPurchaseEntryPoints: D
                } = (0, r.useShouldHideGuildPurchaseEntryPoints)(I), j = (0, E.usePrice)(n);
                if (null == O || D) return null;
                let U = () => (0, h.openGuildProductInfoModal)({
                        guildId: I,
                        guildProductListingId: n.id,
                        analyticsLocation: T
                    }),
                    b = (0, a.jsx)(_.GuildProductListingPopout, {
                        product: n,
                        guildId: I,
                        showEditProduct: P,
                        showUnpublishProduct: !1,
                        showCopyLink: !0,
                        showTestDownload: !1,
                        showDeleteProduct: !1,
                        showReportProduct: !0,
                        onEditProduct: P ? () => {
                            f.openModal(O.id, n.id)
                        } : () => {},
                        onUnpublishProduct: () => {},
                        onDeleteProduct: () => {},
                        onReportProduct: () => {
                            (0, i.openGuildShopReportModal)({
                                listing: n
                            })
                        },
                        onCopyProductLink: () => {
                            (0, u.copy)((0, c.getGuildProductListingUrl)(I, n.id))
                        },
                        onTestDownload: () => {}
                    });
                return (0, a.jsx)(m.default, {
                    imageUrl: R,
                    name: n.name,
                    description: n.description,
                    formattedPrice: j,
                    role: L,
                    ctaComponent: (0, a.jsx)(p.default, {
                        guildId: I,
                        guildProductListingId: n.id,
                        sourceAnalyticsLocations: T
                    }),
                    productType: y,
                    shouldShowFullDescriptionButton: g,
                    onShowFullDescription: U,
                    onTapCard: U,
                    actionMenu: b,
                    showOpaqueBackground: x,
                    hideRoleTag: C,
                    lineClamp: S,
                    cardWidth: A,
                    cardHeight: N,
                    thumbnailHeight: M,
                    descriptionTextVariant: v
                }, n.id)
            }
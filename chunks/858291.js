"use strict";
n.r(t), n.d(t, {
  GuildProductListingPublicCard: function() {
    return N
  }
});
var s = n("37983");
n("884691");
var l = n("65597"),
  a = n("801765"),
  i = n("228035"),
  r = n("465869"),
  o = n("305961"),
  u = n("306160"),
  d = n("442379"),
  c = n("757515"),
  f = n("727411"),
  E = n("492724"),
  _ = n("928576"),
  T = n("739726"),
  I = n("358404"),
  m = n("875746");

function N(e) {
  var t;
  let {
    guildProductListing: n,
    guildId: N,
    location: p,
    shouldShowFullDescriptionButton: S = !0,
    hideRoleTag: A = !1,
    lineClamp: C = 1,
    cardWidth: h,
    cardHeight: g,
    thumbnailHeight: M,
    descriptionTextVariant: O = "text-sm/normal",
    showOpaqueBackground: R = !1
  } = e, L = (0, l.default)([o.default], () => o.default.getGuild(N), [N]), v = null == L ? void 0 : L.roles[null !== (t = null == n ? void 0 : n.role_id) && void 0 !== t ? t : ""], P = (0, a.useListingThumbnailUrl)(n, 600), D = (0, _.useProductType)(n), x = (0, d.useCanManageGuildProduct)(L), {
    shouldHideGuildPurchaseEntryPoints: y
  } = (0, r.useShouldHideGuildPurchaseEntryPoints)(N), U = (0, _.usePrice)(n);
  if (null == L || y) return null;
  let j = () => (0, I.openGuildProductInfoModal)({
      guildId: N,
      guildProductListingId: n.id,
      analyticsLocation: p
    }),
    b = (0, s.jsx)(T.GuildProductListingPopout, {
      product: n,
      guildId: N,
      showEditProduct: x,
      showUnpublishProduct: !1,
      showCopyLink: !0,
      showTestDownload: !1,
      showDeleteProduct: !1,
      showReportProduct: !0,
      onEditProduct: x ? () => {
        f.openModal(L.id, n.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, i.openGuildShopReportModal)({
          listing: n
        })
      },
      onCopyProductLink: () => {
        (0, u.copy)((0, c.getGuildProductListingUrl)(N, n.id))
      },
      onTestDownload: () => {}
    });
  return (0, s.jsx)(E.default, {
    imageUrl: P,
    name: n.name,
    description: n.description,
    formattedPrice: U,
    role: v,
    ctaComponent: (0, s.jsx)(m.default, {
      guildId: N,
      guildProductListingId: n.id,
      sourceAnalyticsLocations: p
    }),
    productType: D,
    shouldShowFullDescriptionButton: S,
    onShowFullDescription: j,
    onTapCard: j,
    actionMenu: b,
    showOpaqueBackground: R,
    hideRoleTag: A,
    lineClamp: C,
    cardWidth: h,
    cardHeight: g,
    thumbnailHeight: M,
    descriptionTextVariant: O,
    isDraft: !n.published
  }, n.id)
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, r = n("666038"),
  l = n("560350"),
  a = n("766274");
i = class e extends r.default {
  static createFromServer(t) {
    let n = t.staff_notes;
    return new e({
      id: t.id,
      skuId: t.sku.id,
      summary: t.summary,
      tagline: t.tagline,
      flavorText: t.flavor_text,
      description: t.description,
      childSkuIds: null != t.child_skus ? t.child_skus.map(e => e.id) : null,
      alternativeSkuIds: null != t.alternative_skus ? t.alternative_skus.map(e => e.id) : null,
      carouselItems: null != t.carousel_items ? t.carousel_items.map(e => ({
        assetId: e.asset_id,
        youtubeVideoId: e.youtube_video_id
      })) : null,
      assets: null != t.assets ? t.assets.map(l.transformStoreAssetFromServer) : null,
      staffNotes: null != n ? {
        content: n.content,
        user: null != n.user ? new a.default(n.user) : null
      } : null,
      guild: null != t.guild ? {
        id: t.guild.id,
        name: t.guild.name,
        icon: t.guild.icon,
        approximateMemberCount: t.guild.approximate_member_count,
        approximatePresenceCount: t.guild.approximate_presence_count
      } : null,
      thumbnail: null != t.thumbnail ? (0, l.transformStoreAssetFromServer)(t.thumbnail) : null,
      previewVideo: null != t.preview_video ? (0, l.transformStoreAssetFromServer)(t.preview_video) : null,
      headerBackground: null != t.header_background ? (0, l.transformStoreAssetFromServer)(t.header_background) : null,
      headerLogoDarkTheme: null != t.header_logo_dark_theme ? (0, l.transformStoreAssetFromServer)(t.header_logo_dark_theme) : null,
      headerLogoLightTheme: null != t.header_logo_light_theme ? (0, l.transformStoreAssetFromServer)(t.header_logo_light_theme) : null,
      boxArt: null != t.box_art ? (0, l.transformStoreAssetFromServer)(t.box_art) : null,
      heroBackground: null != t.hero_background ? (0, l.transformStoreAssetFromServer)(t.hero_background) : null,
      heroVideo: null != t.hero_video ? (0, l.transformStoreAssetFromServer)(t.hero_video) : null,
      entitlementBranchId: t.entitlement_branch_id
    })
  }
  isSlimDirectoryVersion() {
    return null == this.description
  }
  constructor(e) {
    super(), this.id = e.id, this.skuId = e.skuId, this.summary = e.summary, this.tagline = e.tagline, this.flavorText = e.flavorText, this.description = e.description, this.carouselItems = e.carouselItems || [], this.childSkuIds = e.childSkuIds || [], this.alternativeSkuIds = e.alternativeSkuIds || [], this.assets = e.assets || [], this.staffNotes = e.staffNotes, this.guild = e.guild, this.thumbnail = e.thumbnail || null, this.boxArt = e.boxArt || null, this.previewVideo = e.previewVideo || null, this.headerBackground = e.headerBackground || null, this.headerLogoDarkTheme = e.headerLogoDarkTheme || null, this.headerLogoLightTheme = e.headerLogoLightTheme || null, this.heroBackground = e.heroBackground || null, this.heroVideo = e.heroVideo || null, this.entitlementBranchId = e.entitlementBranchId || null
  }
}
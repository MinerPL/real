"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144"),
  l = n("316272"),
  r = n("252931"),
  o = n("557562"),
  u = n("697218"),
  d = n("340412"),
  c = n("719923"),
  E = n("197881"),
  f = n("982457"),
  _ = n("443504"),
  h = n("247820"),
  C = n("641078"),
  T = n("953314"),
  I = n("518151");
let S = "PremiumServerDriveAnnouncementModal";
class N extends l.default {
  _initialize() {
    i.default.subscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), i.default.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    i.default.unsubscribe("POST_CONNECTION_OPEN", this.mayShowAnnouncementModal), i.default.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), this.maybeOpenServerDriveAnnouncementModal = (e, t) => {
      let i = (0, I.extractAnnouncementModalContent)({
        content: e,
        isPreview: t
      });
      return null != i && ((0, s.closeModal)(S), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("518151").then(n.bind(n, "518151"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t,
          properties: i
        })
      }, {
        modalKey: S
      }), !0)
    }, this.handlePreview = e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, !0)
    }, this.mayShowAnnouncementModal = async () => {
      if (await (0, C.maybeFetchActiveBogoPromotion)(), await (0, o.maybeGetPacksForUser)("try packs modal"), E.ProcessArgs.isDisallowPopupsSet()) return;
      if (!(0, s.hasAnyModalOpen)() && _.default.getCurrentConfig({
          location: "OfferAnnouncementManager"
        }).enabled) {
        let e = await (0, h.fetchPremiumMarketingContent)();
        for (let t of e)
          if (this.maybeOpenServerDriveAnnouncementModal(t, !1)) break
      }!(0, s.hasAnyModalOpen)() && await (0, C.isEligibleForBOGOAnnouncementModal)() && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("981125").then(n.bind(n, "981125"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t
        })
      });
      let e = u.default.getCurrentUser(),
        t = (0, r.getInventoryGuildPacksUserExperimentConfig)({
          user: e
        });
      !(0, s.hasAnyModalOpen)() && t.showTryPacksModalAndV2Copy && t.collectEnabled && (0, T.isEligibleForTryPacksModal)((0, c.isPremium)(e)) && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("953314").then(n.bind(n, "953314"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t
        })
      })
    }, this._hasTrialOffer = async () => {
      try {
        if (d.default.shouldFetchOffer() && await f.default.fetchUserTrialOffer(), d.default.hasFetchedOffer() && d.default.hasAnyUnexpiredOffer()) return !0;
        return !1
      } catch (e) {
        return !1
      }
    }
  }
}
var A = new N
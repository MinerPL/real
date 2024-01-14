"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("866227"),
  s = n.n(a),
  l = n("151426"),
  i = n("284016"),
  r = n("10641"),
  o = n("263901"),
  c = n("305961"),
  d = n("697218"),
  u = n("197881"),
  _ = n("299039"),
  N = n("229929"),
  E = n("49111"),
  m = n("994428"),
  f = {
    init(e) {
      let {
        hasModalOpen: t,
        openModal: n
      } = e;
      !u.ProcessArgs.isDisallowPopupsSet() && (0, o.addPostConnectionCallback)(() => {
        if ((0, i.default)()) return;
        let e = d.default.getCurrentUser(),
          a = null != e && 7 > s().diff(s(_.default.extractTimestamp(e.id)), "days"),
          o = Object.values(c.default.getGuilds()),
          u = null != o.find(e => e.hasFeature(E.GuildFeatures.HUB)),
          m = !(0, r.isDismissibleContentDismissed)(l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL),
          f = a || t() || u || !m;
        !f && (0, N.backToSchoolEnabled)() && (N.default.trackExposure({
          location: "8b792a_1"
        }), n(), (0, r.requestMarkDismissibleContentAsShown)(l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL))
      })
    },
    hideHubUpsell() {
      (0, r.markDismissibleContentAsDismissed)(l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL, {
        dismissAction: m.ContentDismissActionType.AUTO
      })
    }
  }
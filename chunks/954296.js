"use strict";
l.r(e), l.d(e, {
  addAppliedGuildBoosts: function() {
    return p
  }
}), l("424973"), l("462568"), l("222007");
var n = l("37983");
l("884691");
var a = l("77078"),
  s = l("850068"),
  i = l("583367"),
  o = l("775433"),
  r = l("697218"),
  u = l("625634"),
  c = l("10514"),
  d = l("599110"),
  f = l("427459"),
  C = l("163732"),
  h = l("49111");
async function p(t) {
  let {
    analyticsLocations: e,
    analyticsLocation: p,
    analyticsSourceLocation: M,
    numberOfBoostsToAdd: L,
    onClose: g,
    closeLayer: m,
    onSubscriptionConfirmation: S,
    guild: _,
    handleSubscribeModalClose: A,
    disablePremiumUpsell: E,
    inPopout: w,
    applicationId: y
  } = t, x = w ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT, T = r.default.getCurrentUser();
  if (null == T) return;
  if (!T.verified) {
    (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("899917").then(l.bind(l, "899917"));
      return e => {
        let {
          onClose: l,
          ...a
        } = e;
        return (0, n.jsx)(t, {
          ...a,
          onClose: l
        })
      }
    }, {
      contextKey: x
    });
    return
  }
  let v = [];
  !c.default.isLoadedForPremiumSKUs() && v.push((0, o.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (v.push(s.fetchSubscriptions()), v.push((0, i.fetchGuildBoostSlots)())), v.length > 0 && await Promise.allSettled(v);
  let N = (0, f.getAvailableGuildBoostSlots)(u.default.boostSlots),
    P = N.length,
    R = t => {
      null == g || g(), null == A || A(t)
    };
  if (P > 0 && (null == L || P >= L)) {
    let t;
    1 === P ? t = N.slice(0, 1) : null != L && (t = N.slice(0, L));
    let e = await (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("247760").then(l.bind(l, "247760"));
      return l => {
        let {
          onClose: a,
          ...s
        } = l;
        return (0, n.jsx)(e, {
          ...s,
          onClose: t => {
            a(), R(t)
          },
          selectedGuild: _,
          locationSection: h.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
          guildBoostSlots: t
        })
      }
    }, {
      onCloseRequest: () => {
        null != e && (0, a.closeModal)(e), R(!1)
      },
      contextKey: x
    })
  } else(0, C.default)({
    analyticsLocations: e,
    analyticsLocation: p,
    analyticsSourceLocation: M,
    guildId: _.id,
    closeLayer: () => {
      null == g || g(), null == m || m(), d.default.track(h.AnalyticEvents.MODAL_DISMISSED, {
        type: h.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
        location_section: p.section
      })
    },
    totalNumberOfSlotsToAssign: null != L ? L : 1,
    onCloseModal: R,
    disablePremiumUpsell: E,
    onSubscriptionConfirmation: S,
    inPopout: w,
    applicationId: y
  })
}
"use strict";
l.r(e), l.d(e, {
  default: function() {
    return M
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("77078"),
  r = l("244201"),
  u = l("685665"),
  c = l("181114"),
  d = l("427459"),
  f = l("954296"),
  C = l("49111"),
  h = l("782340"),
  p = l("500924"),
  M = t => {
    let {
      analyticsLocation: e,
      analyticsSourceLocation: l,
      guild: s,
      buttonText: M,
      targetBoostedGuildTier: L,
      onClose: g = () => {},
      closeLayer: m = () => {},
      pauseAnimation: S = !1,
      applicationId: _,
      handleSubscribeModalClose: A,
      withHighlight: E = !1,
      ...w
    } = t, {
      analyticsLocations: y
    } = (0, u.default)(), x = (0, r.useAppContext)(), T = x === C.AppContext.POPOUT, [v, N] = a.useState(!1), P = null != L ? Math.max((0, d.getNumberOfAppliedBoostsNeededForTier)(s, L), 1) : 1, R = (0, d.generateBlockGuildSubscriptionPurchasesNode)(), I = async () => {
      N(!0), await (0, f.addAppliedGuildBoosts)({
        analyticsLocations: y,
        analyticsLocation: e,
        analyticsSourceLocation: l,
        guild: s,
        numberOfBoostsToAdd: P,
        onClose: g,
        closeLayer: m,
        inPopout: T,
        applicationId: _,
        handleSubscribeModalClose: A
      }), N(!1)
    };
    return null != R ? (0, n.jsx)(o.Tooltip, {
      text: R,
      "aria-label": !1,
      children: t => (0, n.jsx)(c.default, {
        ...t,
        disabled: !0,
        size: o.Button.Sizes.SMALL,
        pauseAnimation: S,
        ...w,
        children: null != M ? M : h.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
      })
    }) : (0, n.jsx)(c.default, {
      size: o.Button.Sizes.SMALL,
      ...w,
      className: i(w.className, {
        [p.buttonHighlighted]: E
      }),
      submitting: v,
      onClick: I,
      pauseAnimation: S,
      children: null != M ? M : h.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
    })
  }
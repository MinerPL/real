"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("648825"),
  u = s("757715"),
  c = s("406876"),
  E = s("395905"),
  _ = s("700495"),
  T = s("903152"),
  I = s("851088"),
  S = s("385881"),
  N = s("253414"),
  g = s("782340"),
  f = s("332227"),
  A = s("888512");

function L(e) {
  var t, s;
  let {
    allSubscriptionListings: l,
    priceTiers: L,
    loading: m,
    error: C,
    handlePublishTier: O,
    onDeleteEditState: h
  } = e, {
    editStateId: R
  } = (0, c.useEditStateContext)(), D = (0, r.useStateFromStores)([d.default], () => d.default.getSubscriptionListing(R)), M = (0, u.useRoleSubscriptionSettingsDisabled)(), G = n.useMemo(() => {
    let e = l.filter(e => e.id !== R).map(e => {
      var t;
      return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
    });
    return null == L ? void 0 : L.filter(t => !e.includes(t))
  }, [l, R, L]), x = null == D, p = null !== (t = null == D ? void 0 : D.published) && void 0 !== t && t, U = null !== (s = null == D ? void 0 : D.archived) && void 0 !== s && s;
  return (0, a.jsxs)("div", {
    className: A.body,
    children: [null != C && (0, a.jsx)(E.default, {
      children: C.getAnyErrorMessage()
    }), !p && !M && !U && (0, a.jsxs)("div", {
      className: A.publishListing,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: A.publishListingInfoHeader,
          children: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_TITLE
        }), (0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_DESCRIPTION
        })]
      }), (0, a.jsx)(o.Tooltip, {
        shouldShow: x,
        tooltipClassName: f.autoWidth,
        text: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SAVE_BEFORE_PUBLISH_TOOLTIP,
        children: e => (0, a.jsx)(o.Button, {
          ...e,
          disabled: x,
          color: o.Button.Colors.CUSTOM,
          wrapperClassName: f.autoWidth,
          className: i(A.publishButton, f.autoWidth),
          onClick: O,
          submitting: m,
          children: g.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_EDIT_PUBLISH_DRAFT_CTA
        })
      })]
    }), (0, a.jsx)(T.default, {
      priceTiers: G
    }), (0, a.jsx)(I.default, {
      allSubscriptionListings: l
    }), (0, a.jsx)(S.default, {}), (0, a.jsx)(N.default, {}), (0, a.jsx)(_.default, {
      onDeleteEditState: h
    })]
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("627445"),
  u = s.n(l),
  o = s("446674"),
  d = s("819855"),
  c = s("77078"),
  f = s("850068"),
  E = s("812204"),
  p = s("685665"),
  I = s("161778"),
  m = s("797647"),
  _ = s("10514"),
  N = s("145131"),
  S = s("423487"),
  P = s("719923"),
  R = s("153160"),
  T = s("782340"),
  C = s("733848");

function A(e) {
  let {
    subscription: t,
    renewalMutations: s,
    transitionState: n,
    onClose: i,
    analyticsLocation: r
  } = e, l = (0, o.useStateFromStores)([I.default], () => I.default.theme), {
    analyticsLocations: S
  } = (0, p.default)(E.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function A() {
    await (0, f.upgradeSubscription)(t, t.planId, S, r), i()
  }
  let h = _.default.get(t.planId);
  u(null != h, "Missing subscriptionPlan");
  let L = (0, P.getPrice)(t.planId, !1, !1, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    M = (0, R.formatRate)((0, R.formatPrice)(L.amount, L.currency), h.interval, h.intervalCount);
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: n,
    "aria-label": T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, a.jsxs)(c.ModalHeader, {
      justify: N.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, a.jsx)(c.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsx)(c.ModalContent, {
      className: C.modalBody,
      children: (0, m.isNoneSubscription)(t.planId) ? T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: P.default.getDisplayName(s.planId),
        existingRate: M
      }) : T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: P.default.getDisplayName(t.planId),
        downgradedPlan: P.default.getDisplayName(s.planId),
        existingRate: M
      })
    }), (0, a.jsxs)(c.ModalFooter, {
      children: [(0, a.jsx)(c.Button, {
        onClick: A,
        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, a.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, d.isThemeLight)(l) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: i,
        children: T.default.Messages.NEVERMIND
      })]
    })]
  })
}

function h(e) {
  let {
    subscription: t,
    renewalMutations: s,
    className: i,
    analyticsLocation: l
  } = e, [u, o] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: r(C.root, i),
    children: [(0, a.jsx)(S.default, {
      className: C.infoIcon
    }), (0, a.jsx)("div", {
      className: C.text,
      children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: t.hasExternalPlanChange ? (0, P.getExternalPlanDisplayName)(s) : P.default.getDisplayName(s.planId),
        date: t.currentPeriodEnd
      })
    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
      onClick: e => {
        o(!0), e.preventDefault()
      },
      className: C.cancelLink,
      children: T.default.Messages.CANCEL
    }), u ? (0, a.jsx)(c.Modal, {
      renderModal: e => {
        let {
          transitionState: n
        } = e;
        return (0, a.jsx)(A, {
          subscription: t,
          renewalMutations: s,
          transitionState: n,
          onClose: () => o(!1),
          analyticsLocation: l
        })
      },
      onCloseRequest: () => o(!1)
    }) : null]
  })
}
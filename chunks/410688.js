"use strict";
n.r(t), n.d(t, {
  PendingMessageRequestRowItem: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("144491"),
  r = n("208021"),
  o = n("982108"),
  u = n("803524"),
  d = n("7643"),
  c = n("98708"),
  f = n("782340"),
  E = n("727447");

function _(e) {
  let {
    active: t,
    user: n,
    channel: _
  } = e, h = (0, u.useListHasSingleMessageRequest)(), C = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(f.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
  }, []), I = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), T = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID), h && (0, l.transitionToChannel)(_.id)
  }, [_.id, h]), {
    acceptMessageRequest: S,
    rejectMessageRequest: m,
    isAcceptLoading: p,
    isRejectLoading: A,
    isUserProfileLoading: g,
    isOptimisticAccepted: N,
    isOptimisticRejected: R
  } = (0, d.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: T,
    onRejectSuccess: I,
    onError: C
  }), O = p || A || g || N || R;
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(c.default, {
      channel: _,
      otherUser: n,
      active: t
    }), (0, a.jsxs)("div", {
      className: E.actions,
      children: [(0, a.jsx)(i.Button, {
        className: E.button,
        color: i.ButtonColors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), m(_.id)
        },
        disabled: O,
        submitting: A || R,
        children: f.default.Messages.MESSAGE_REQUEST_IGNORE
      }), (0, a.jsx)(i.Button, {
        className: E.button,
        color: i.ButtonColors.BRAND,
        size: i.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), S(_.id)
        },
        disabled: O,
        submitting: p || g || N,
        children: f.default.Messages.MESSAGE_REQUEST_ACCEPT
      })]
    })]
  })
}
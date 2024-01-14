"use strict";
n.r(t), n.d(t, {
  BenefitsConfirmationLite: function() {
    return a
  },
  PurchaseConfirmationLite: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  l = n("724038"),
  s = n("782340"),
  u = n("22019");
let a = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: a,
    subtitle: o,
    confirmCta: c,
    showOpenDiscord: d = !0
  } = e;
  return (0, r.jsxs)("div", {
    className: u.confirmationContainer,
    children: [(0, r.jsx)(i.Heading, {
      className: u.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: a
    }), null != o ? (0, r.jsx)(i.Text, {
      className: u.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, r.jsxs)("div", {
      className: u.buttonContainer,
      children: [d && (0, r.jsx)(i.Button, {
        fullWidth: !0,
        onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, r.jsx)(i.Button, {
        fullWidth: !0,
        color: i.Button.Colors.PRIMARY,
        onClick: t,
        children: c
      }), null != n && (0, r.jsx)(i.Button, {
        fullWidth: !0,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        onClick: n,
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
      })]
    })]
  })
};

function o(e) {
  let {
    onConfirm: t,
    listing: n,
    subscription: a
  } = e;
  return (0, r.jsxs)("div", {
    className: u.confirmationContainer,
    children: [(0, r.jsx)(i.Heading, {
      className: u.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n.name
      })
    }), (0, r.jsx)(i.Text, {
      className: u.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == a ? void 0 : a.currentPeriodEnd
      })
    }), (0, r.jsxs)("div", {
      className: u.buttonContainer,
      children: [(0, r.jsx)(i.Button, {
        className: u.openDiscordButton,
        onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, r.jsx)(i.Button, {
        className: u.doneButton,
        look: i.Button.Looks.BLANK,
        onClick: t,
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}
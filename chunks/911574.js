"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("77078"),
  r = n("629803"),
  o = n("79112"),
  u = n("163466"),
  d = n("49111"),
  c = n("994428"),
  f = n("782340"),
  E = n("72725");

function _(e) {
  let {
    className: t,
    markAsDismissed: n
  } = e;
  return (0, a.jsxs)(u.default, {
    className: i(E.card, t),
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      className: E.header,
      children: f.default.Messages.NOW_PLAYING_GDPR_HEADER
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: f.default.Messages.NOW_PLAYING_GDPR_BODY.format({
        onPrivacyClick: () => o.default.open(d.UserSettingsSections.PRIVACY_AND_SAFETY)
      })
    }), (0, a.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, a.jsx)(l.Button, {
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, r.setConsents)([d.Consents.PERSONALIZATION], []),
        children: f.default.Messages.ACTIVITY_FEED_CARD_GDPR_BUTTON_YES
      }), (0, a.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        onClick: () => n(c.ContentDismissActionType.DISMISS),
        look: l.Button.Looks.LINK,
        children: f.default.Messages.NO_THANKS
      })]
    })]
  })
}
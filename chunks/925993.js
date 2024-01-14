"use strict";
s.r(t), s.d(t, {
  getVerificationLevelText: function() {
    return I
  },
  default: function() {
    return N
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("669491"),
  i = s("77078"),
  r = s("957255"),
  o = s("556081"),
  d = s("216947"),
  u = s("987772"),
  c = s("192918"),
  E = s("49111"),
  _ = s("782340"),
  T = s("977618");

function I(e) {
  switch (e) {
    case E.VerificationLevels.LOW:
      return _.default.Messages.VERIFICATION_LEVEL_LOW;
    case E.VerificationLevels.MEDIUM:
      return _.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case E.VerificationLevels.HIGH:
      return _.default.Messages.VERIFICATION_LEVEL_HIGH;
    case E.VerificationLevels.VERY_HIGH:
      return _.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let S = {
  [E.VerificationLevels.NONE]: "",
  [E.VerificationLevels.LOW]: l.default.unsafe_rawColors.GREEN_360.css,
  [E.VerificationLevels.MEDIUM]: l.default.unsafe_rawColors.YELLOW_300.css,
  [E.VerificationLevels.HIGH]: l.default.unsafe_rawColors.ORANGE_345.css,
  [E.VerificationLevels.VERY_HIGH]: l.default.unsafe_rawColors.RED_400.css
};
var N = function(e) {
  let {
    guild: t
  } = e, l = r.default.can(E.Permissions.MANAGE_GUILD, t), N = t.verificationLevel, g = N === E.VerificationLevels.VERY_HIGH ? d.default : o.default, f = n.useMemo(() => I(N), [N]), A = S[N], L = (0, a.jsx)("div", {
    className: T.verificationLevelTitle,
    children: _.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(i.Text, {
          className: T.verificationLevelHook,
          style: {
            color: A
          },
          variant: "text-sm/semibold",
          children: f
        }, "hook")
      }
    })
  }), m = N === E.VerificationLevels.VERY_HIGH ? _.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : _.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(c.default, {
    title: L,
    children: (0, a.jsxs)("div", {
      className: T.verificationContainer,
      children: [(0, a.jsx)(g, {
        width: 20,
        height: 20,
        className: T.icon
      }), (0, a.jsx)(i.Text, {
        className: T.guildVerificationText,
        variant: "text-sm/normal",
        children: m
      }), l && (0, a.jsx)(i.Clickable, {
        className: T.iconInteractiveContainer,
        onClick: () => (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("161069").then(s.bind(s, "161069"));
          return s => (0, a.jsx)(e, {
            ...s,
            guild: t
          })
        }),
        children: (0, a.jsx)(u.default, {
          width: 20,
          height: 20,
          className: T.iconInteractive
        })
      })]
    })
  })
}
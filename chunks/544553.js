"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983");
n("884691");
var s = n("65597"),
  i = n("225288"),
  l = n("77078"),
  r = n("697218"),
  o = n("171710"),
  u = n("462579"),
  d = n("368874"),
  c = n("339853"),
  E = n("25132"),
  f = n("322372"),
  _ = n("447342"),
  h = n("299138"),
  C = n("893302"),
  T = n("490013"),
  I = n("922832"),
  S = n("782340"),
  N = n("54236"),
  A = () => {
    let e = (0, E.useUserForLinkStatus)(I.UserLinkStatus.ACTIVE),
      t = (0, c.useSelectedTeenUser)(),
      n = (0, s.default)([r.default], () => r.default.getCurrentUser()),
      A = (0, d.useAgeSpecificText)(S.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, S.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
      p = (0, d.useAgeSpecificText)(S.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, S.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
      m = (0, d.useAgeSpecificText)(S.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, S.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
      g = (0, l.useRedesignIconContext)().enabled;
    return void 0 === n ? null : (0, a.jsxs)("div", {
      className: N.container,
      children: [(0, a.jsx)("div", {
        className: N.banner,
        children: (0, a.jsx)(f.default, {})
      }), (0, a.jsxs)("div", {
        className: N.featureCards,
        children: [(0, a.jsx)(C.default, {
          iconClassName: N.chatCheckIcon,
          icon: o.default,
          header: S.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
          description: A
        }), (0, a.jsx)(C.default, {
          icon: u.default,
          header: S.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
          description: p
        }), (0, a.jsx)(C.default, {
          icon: g ? i.QrCodeCameraIcon : T.default,
          header: S.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
          description: m
        })]
      }), 0 === e.length ? (0, a.jsx)(h.default, {}) : null, void 0 !== t && e.length > 0 ? (0, a.jsx)(_.default, {
        user: t
      }) : null]
    })
  }
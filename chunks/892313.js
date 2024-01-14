"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var n = s("917351"),
  i = s.n(n),
  a = s("49111"),
  o = s("782340");
let {
  CAPTCHA: l,
  EMAIL: r,
  PHONE: u,
  REVERIFY_EMAIL: d,
  REVERIFY_PHONE: h
} = a.VerificationTypes, c = {
  [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [r],
  [a.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
  [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
  [a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [h],
  [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, u],
  [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
  [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, h],
  [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, h],
  [a.UserRequiredActions.REQUIRE_CAPTCHA]: [l],
  [a.UserRequiredActions.AGREEMENTS]: []
};
var E = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : c[e],
  getButtonTitle(e) {
    switch (e) {
      case a.VerificationTypes.EMAIL:
        return o.default.Messages.VERIFY_BY_EMAIL;
      case a.VerificationTypes.PHONE:
        return o.default.Messages.START_PHONE_VERIFICATION_BUTTON;
      case a.VerificationTypes.REVERIFY_EMAIL:
        return o.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
      case a.VerificationTypes.REVERIFY_PHONE:
        return o.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
      default:
        return o.default.Messages.START_VERIFICATION_BUTTON
    }
  },
  areVerificationTypesEqual: (e, t) => i.isEqual(e, t)
}
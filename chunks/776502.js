"use strict";
n.r(t), n.d(t, {
  getInvalidMFACodeError: function() {
    return o
  },
  openMFAModal: function() {
    return d
  }
}), n("70102"), n("581081");
var i = n("872717"),
  s = n("695501"),
  r = n("49111"),
  a = n("782340");

function o(e) {
  let t = a.default.Messages.MFA_V2_INVALID_CODE;
  switch (e) {
    case "webauthn":
      t = a.default.Messages.MFA_V2_INVALID_WEBAUTHN;
      break;
    case "password":
      t = a.default.Messages.MFA_V2_INVALID_PASSWORD
  }
  return t
}

function l(e, t) {
  if (null == t || null == t.code) return null;
  switch (t.code) {
    case r.AbortCodes.MFA_INVALID_CODE:
      return o(e);
    case r.AbortCodes.STAFF_REQUIRED:
      return a.default.Messages.MFA_REQUIRED_FOR_STAFF;
    case r.AbortCodes.MFA_REQUIRED:
    case r.AbortCodes.MFA_REQUIRED_FOR_CREATOR_MONETIZATION:
      var n;
      return null !== (n = t.message) && void 0 !== n ? n : a.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR;
    default:
      return a.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR
  }
}
async function u(e) {
  let {
    ticket: t,
    mfaType: n,
    data: s
  } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  try {
    let e = await i.default.post({
      url: r.Endpoints.FINISH_MFA_CHECK,
      body: {
        ticket: t,
        mfa_type: n,
        data: s
      },
      retries: a
    });
    return e.body
  } catch (t) {
    let e = l(n, t.body);
    throw null != e ? Error(e) : t
  }
}

function d(e, t, i) {
  let r = async e => {
    let n = await u(e),
      i = {
        "X-Discord-MFA-Authorization": n.token
      };
    return new Promise((n, s) => {
      t(i, (t, i, r) => {
        let a = l(e.mfaType, t.body);
        return null != a ? (s(Error(a)), !0) : (n(), !1)
      })
    })
  };
  e.methods = e.methods.filter(e => Object.hasOwn(s.SELECT_NAMES, e.type)), n("24287").openMFAModal(e, r, i)
}
"use strict";
n.r(t), n.d(t, {
  isValidFormResponse: function() {
    return o
  },
  isAutomaticApprovalFormField: function() {
    return s
  },
  isManualApprovalFormField: function() {
    return a
  }
});
var i = n("449008"),
  r = n("567054"),
  l = n("394294");
let o = e => {
  let {
    required: t,
    response: n,
    field_type: l
  } = e;
  if (!t) return !0;
  if (null == n) return !1;
  switch (l) {
    case r.VerificationFormFieldTypes.TERMS:
    case r.VerificationFormFieldTypes.VERIFICATION:
      return !!n;
    case r.VerificationFormFieldTypes.TEXT_INPUT:
    case r.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof n && "" !== n.trim();
    case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof n;
    default:
      return (0, i.assertNever)(l)
  }
};

function s(e) {
  return l.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}

function a(e) {
  return l.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}
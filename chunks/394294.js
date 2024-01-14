"use strict";
n.r(t), n.d(t, {
  AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
    return r
  },
  MANUAL_APPROVAL_FORM_FIELDS: function() {
    return a
  },
  MAX_FORM_ELEMENTS: function() {
    return o
  },
  MAX_NUM_RULES: function() {
    return d
  },
  MAX_RULE_LENGTH: function() {
    return u
  },
  MAX_QUESTION_LENGTH: function() {
    return l
  },
  MAX_NUM_CHOICES: function() {
    return f
  },
  MAX_CHOICE_LENGTH: function() {
    return _
  },
  MAX_TEXT_RESPONSE_LENGTH: function() {
    return c
  },
  MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
    return g
  },
  MAX_DESCRIPTION_LENGTH: function() {
    return m
  },
  MEMBER_VERIFICATION_TYPE: function() {
    return h
  },
  IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
    return v
  }
}), n("222007");
var s, i = n("567054");
i.VerificationFormFieldTypes.VERIFICATION;
let r = new Set([i.VerificationFormFieldTypes.TERMS]),
  a = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
  o = 5,
  d = 16,
  u = 300,
  l = 300,
  f = 8,
  _ = 150,
  c = 150,
  g = 1e3,
  m = 300,
  h = "Membership Gating",
  v = "in-app-member-verification";
(s || (s = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
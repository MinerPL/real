"use strict";
var i, r, s, a, o, l, u, c;
n.r(t), n.d(t, {
  MAX_RESULTS_PER_PAGE: function() {
    return d
  },
  MAX_VISIBLE_PAGES: function() {
    return f
  },
  VerificationFormFieldTypes: function() {
    return i
  },
  GuildJoinRequestSortOrders: function() {
    return s
  },
  GuildJoinRequestApplicationStatuses: function() {
    return a
  },
  isTermsFormField: function() {
    return E
  }
});
let d = 25,
  f = 4;

function E(e) {
  return null != e && "TERMS" === e.field_type
}(o = i || (i = {})).TERMS = "TERMS", o.TEXT_INPUT = "TEXT_INPUT", o.PARAGRAPH = "PARAGRAPH", o.MULTIPLE_CHOICE = "MULTIPLE_CHOICE", o.VERIFICATION = "VERIFICATION", (l = r || (r = {})).EMAIL = "email", l.PHONE = "phone", (u = s || (s = {})).TIMESTAMP_DESC = "NEWEST", u.TIMESTAMP_ASC = "OLDEST", (c = a || (a = {})).STARTED = "STARTED", c.SUBMITTED = "SUBMITTED", c.REJECTED = "REJECTED", c.APPROVED = "APPROVED"
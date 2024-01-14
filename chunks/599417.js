"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r, s = n("872717"),
  a = n("49111"),
  o = n("782340");
r = class extends s.default.V8APIError {
  constructor(e, t) {
    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
      statusPageURL: a.Links.STATUS,
      details: "".concat(t)
    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
      statusPageURL: a.Links.STATUS
    }))
  }
}
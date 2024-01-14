"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, l = n("872717"),
  r = n("49111"),
  o = n("782340");
i = class extends l.default.V6OrEarlierAPIError {
  constructor(e, t) {
    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
      statusPageURL: r.Links.STATUS,
      details: "".concat(t)
    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
      statusPageURL: r.Links.STATUS
    }))
  }
}
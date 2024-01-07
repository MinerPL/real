            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("872717"),
                s = n("49111"),
                l = n("782340");
            i = class extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: s.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: s.Links.STATUS
                    }))
                }
            }
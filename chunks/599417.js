            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n, s = a("872717"),
                l = a("49111"),
                r = a("782340");
            n = class extends s.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
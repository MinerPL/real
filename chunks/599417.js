            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                a = n("49111"),
                s = n("782340");
            r = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
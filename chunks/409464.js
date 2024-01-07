            "use strict";
            n.r(t), n.d(t, {
                isValidFormResponse: function() {
                    return l
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
                o = n("394294");
            let l = e => {
                let {
                    required: t,
                    response: n,
                    field_type: o
                } = e;
                if (!t) return !0;
                if (null == n) return !1;
                switch (o) {
                    case r.VerificationFormFieldTypes.TERMS:
                    case r.VerificationFormFieldTypes.VERIFICATION:
                        return !!n;
                    case r.VerificationFormFieldTypes.TEXT_INPUT:
                    case r.VerificationFormFieldTypes.PARAGRAPH:
                        return "string" == typeof n && "" !== n.trim();
                    case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                        return "number" == typeof n;
                    default:
                        return (0, i.assertNever)(o)
                }
            };

            function s(e) {
                return o.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
            }

            function a(e) {
                return o.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
            }
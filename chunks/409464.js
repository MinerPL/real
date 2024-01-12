            "use strict";
            n.r(t), n.d(t, {
                isValidFormResponse: function() {
                    return l
                },
                isAutomaticApprovalFormField: function() {
                    return a
                },
                isManualApprovalFormField: function() {
                    return o
                }
            });
            var r = n("449008"),
                i = n("567054"),
                s = n("394294");
            let l = e => {
                let {
                    required: t,
                    response: n,
                    field_type: s
                } = e;
                if (!t) return !0;
                if (null == n) return !1;
                switch (s) {
                    case i.VerificationFormFieldTypes.TERMS:
                    case i.VerificationFormFieldTypes.VERIFICATION:
                        return !!n;
                    case i.VerificationFormFieldTypes.TEXT_INPUT:
                    case i.VerificationFormFieldTypes.PARAGRAPH:
                        return "string" == typeof n && "" !== n.trim();
                    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                        return "number" == typeof n;
                    default:
                        return (0, r.assertNever)(s)
                }
            };

            function a(e) {
                return s.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
            }

            function o(e) {
                return s.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
            }
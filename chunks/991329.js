            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return s
                }
            });
            var t = i("37983");
            i("884691");
            var r = i("153160"),
                l = i("883662"),
                a = i("782340");

            function s(e) {
                let {
                    invoice: n
                } = e;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(l.PremiumInvoiceTableRow, {
                    label: a.default.Messages.TAX_LABEL,
                    value: (0, r.formatPrice)(n.tax, n.currency)
                })
            }
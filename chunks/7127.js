            "use strict";
            s.r(t), s.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("627445"),
                l = s.n(r),
                i = s("77078"),
                a = s("642906"),
                u = s("367767"),
                o = s("650484"),
                d = s("782340"),
                c = s("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: s,
                    selectedSkuId: r,
                    application: f
                } = (0, a.usePaymentContext)();
                l(null != r, "Expected selectedSkuId"), l(null != f, "Expected application");
                let S = s[r];
                l(null != S, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: S.name
                });
                return (0, n.jsxs)(o.PaymentPortalBody, {
                    children: [(0, n.jsx)(u.default, {}), (0, n.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, n.jsx)("div", {
                            className: c.divider
                        }), (0, n.jsx)(i.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
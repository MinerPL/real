            "use strict";
            s.r(t), s.d(t, {
                CurrencyWrapper: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("575209");

            function i(e) {
                let {
                    currencies: t,
                    className: s,
                    children: n
                } = e;
                return t.length < 2 ? null : (0, a.jsx)("div", {
                    className: s,
                    children: n
                })
            }
            var r = function(e) {
                let {
                    currencies: t,
                    onChange: s,
                    selectedCurrency: i,
                    className: r,
                    disabled: o = !1
                } = e;
                if (t.length < 2) return null;
                let d = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, l.getCurrencyFullName)(e))
                }));
                return (0, a.jsx)(n.SingleSelect, {
                    value: i,
                    options: d,
                    onChange: e => {
                        null != e && s(e)
                    },
                    className: r,
                    isDisabled: o
                })
            }
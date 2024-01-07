            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("794538"),
                r = n("145131"),
                i = n("124969"),
                o = n("782340"),
                u = n("265445"),
                d = n("926622");

            function c(e) {
                let {
                    title: t,
                    subtitle: n,
                    error: c,
                    onSubmit: f,
                    onCancel: E
                } = e;
                return (0, s.jsxs)(r.default, {
                    direction: r.default.Direction.VERTICAL,
                    children: [(0, s.jsx)(i.Title, {
                        className: d.marginBottom8,
                        children: t
                    }), (0, s.jsx)(i.SubTitle, {
                        className: u.subTitle,
                        children: n
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(l.default, {
                            inputClassName: u.codeInput,
                            onSubmit: f
                        }), null != c ? (0, s.jsx)(a.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: c
                        }) : null]
                    }), null != E && (0, s.jsx)(a.Button, {
                        className: u.button,
                        onClick: E,
                        color: a.Button.Colors.PRIMARY,
                        children: o.default.Messages.CANCEL
                    })]
                })
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                r = s("794538"),
                o = s("145131"),
                l = s("124969"),
                i = s("782340"),
                u = s("265445"),
                d = s("926622");

            function c(e) {
                let {
                    title: t,
                    subtitle: s,
                    error: c,
                    onSubmit: h,
                    onCancel: f
                } = e;
                return (0, a.jsxs)(o.default, {
                    direction: o.default.Direction.VERTICAL,
                    children: [(0, a.jsx)(l.Title, {
                        className: d.marginBottom8,
                        children: t
                    }), (0, a.jsx)(l.SubTitle, {
                        className: u.subTitle,
                        children: s
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(r.default, {
                            inputClassName: u.codeInput,
                            onSubmit: h
                        }), null != c ? (0, a.jsx)(n.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: c
                        }) : null]
                    }), null != f && (0, a.jsx)(n.Button, {
                        className: u.button,
                        onClick: f,
                        color: n.Button.Colors.PRIMARY,
                        children: i.default.Messages.CANCEL
                    })]
                })
            }
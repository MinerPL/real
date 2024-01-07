            "use strict";
            n.r(t), n.d(t, {
                MultipleChoiceFieldBody: function() {
                    return d
                },
                DisabledMultipleChoiceFormField: function() {
                    return f
                },
                MultipleChoiceFormField: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                l = n.n(o),
                s = n("77078"),
                a = n("272460"),
                u = n("621115"),
                c = n("847121");

            function d(e) {
                let {
                    disabled: t,
                    field: n,
                    value: o,
                    radioItemClassName: a,
                    radioItemIconClassName: u,
                    onChange: d
                } = e, {
                    choices: f
                } = n, E = r.useMemo(() => f.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: l(c.multipleChoiceIcon, u)
                })), [f, u]);
                return (0, i.jsx)(s.RadioGroup, {
                    disabled: t,
                    options: E,
                    value: o,
                    onChange: d,
                    radioItemClassName: a,
                    withTransparentBackground: !0
                })
            }

            function f(e) {
                let {
                    formField: t
                } = e, n = null != t.response ? t.choices[t.response] : "";
                return (0, i.jsx)(a.QuestionRenderer, {
                    title: t.label,
                    children: (0, i.jsx)(u.TextInputFieldBody, {
                        className: c.fieldBackground,
                        value: n,
                        disabled: !0
                    })
                })
            }

            function E(e) {
                let {
                    formField: t,
                    onChange: n
                } = e;
                return (0, i.jsx)(a.QuestionRenderer, {
                    title: t.label,
                    children: (0, i.jsx)(d, {
                        radioItemClassName: c.fieldBackground,
                        field: t,
                        value: t.response,
                        onChange: n
                    })
                })
            }
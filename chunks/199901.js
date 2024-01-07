            "use strict";
            n.r(t), n.d(t, {
                ParagraphFieldBody: function() {
                    return c
                },
                DisabledParagraphFormField: function() {
                    return d
                },
                ParagraphFormField: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                l = n("77078"),
                s = n("272460"),
                a = n("394294"),
                u = n("847121");

            function c(e) {
                let {
                    value: t,
                    placeholder: n,
                    onChange: r,
                    disabled: s,
                    className: c
                } = e;
                return (0, i.jsx)(l.TextArea, {
                    className: o(u.paragraphFieldBody, c),
                    maxLength: a.MAX_PARAGRAPH_RESPONSE_LENGTH,
                    value: null != t ? t : "",
                    placeholder: null != n ? n : "",
                    onChange: r,
                    disabled: s,
                    autosize: !0
                })
            }

            function d(e) {
                let {
                    formField: t
                } = e;
                return (0, i.jsx)(s.QuestionRenderer, {
                    title: t.label,
                    children: (0, i.jsx)(c, {
                        className: u.fieldBackground,
                        value: t.response,
                        disabled: !0
                    })
                })
            }

            function f(e) {
                let {
                    formField: t,
                    onChange: n
                } = e;
                return (0, i.jsx)(s.QuestionRenderer, {
                    title: t.label,
                    children: (0, i.jsx)(c, {
                        className: u.fieldBackground,
                        value: t.response,
                        onChange: n
                    })
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("701909"),
                i = l("145131"),
                r = l("822997"),
                o = l("476765"),
                d = l("782340"),
                u = l("926622");

            function c(e) {
                let {
                    value: t,
                    onChange: l,
                    children: c,
                    note: f,
                    helpdeskArticleId: m,
                    style: I,
                    disabled: T = !1,
                    hideBorder: N = !1,
                    className: E = u.marginBottom20
                } = e, h = (0, o.useUID)();
                return (0, n.jsxs)(i.default, {
                    style: I,
                    className: E,
                    direction: i.default.Direction.VERTICAL,
                    children: [(0, n.jsxs)(i.default, {
                        children: [(0, n.jsx)(i.default.Child, {
                            children: (0, n.jsx)(a.FormTitle, {
                                id: h,
                                className: u.marginReset,
                                tag: a.FormTitleTags.H3,
                                disabled: T,
                                children: c
                            })
                        }), (0, n.jsx)(i.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(r.default, {
                                value: t,
                                onChange: l,
                                disabled: T,
                                labelledBy: h
                            })
                        })]
                    }), null != f && (0, n.jsx)(i.default.Child, {
                        className: u.marginTop4,
                        children: (0, n.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            children: f
                        })
                    }), null != m && (0, n.jsx)(i.default.Child, {
                        className: u.marginTop4,
                        children: (0, n.jsx)(a.FormText, {
                            disabled: T,
                            type: a.FormTextTypes.DESCRIPTION,
                            children: (0, n.jsx)(a.Anchor, {
                                href: s.default.getArticleURL(m),
                                children: d.default.Messages.LEARN_MORE
                            })
                        })
                    }), !N && (0, n.jsx)(i.default.Child, {
                        className: u.marginTop20,
                        children: (0, n.jsx)(a.FormDivider, {})
                    })]
                })
            }
            r.default.Types, c.Types = r.default.Types
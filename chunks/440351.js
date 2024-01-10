            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("145131"),
                u = n("296165"),
                d = n("926622");
            class c extends a.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: a,
                        onAgree: s,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, l.jsxs)(o.default, {
                        className: u.gatedContent,
                        justify: o.default.Justify.CENTER,
                        align: o.default.Align.CENTER,
                        direction: o.default.Direction.VERTICAL,
                        children: [(0, l.jsx)("div", {
                            className: i(u.image, f)
                        }), (0, l.jsx)("div", {
                            className: i(u.title, d.marginBottom8),
                            children: e
                        }), (0, l.jsx)("div", {
                            className: i(u.description, d.marginBottom20),
                            children: t
                        }), (0, l.jsxs)(o.default, {
                            justify: o.default.Justify.CENTER,
                            align: o.default.Align.CENTER,
                            grow: 0,
                            children: [null != a ? (0, l.jsx)(r.Button, {
                                className: u.action,
                                size: r.ButtonSizes.LARGE,
                                color: r.ButtonColors.PRIMARY,
                                onClick: c,
                                children: a
                            }) : null, null != n ? (0, l.jsx)(r.Button, {
                                className: u.action,
                                color: r.Button.Colors.RED,
                                size: r.ButtonSizes.LARGE,
                                onClick: s,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = c
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("145131"),
                o = n("296165"),
                c = n("926622");
            class d extends r.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: r,
                        onAgree: i,
                        onDisagree: d,
                        imageClassName: f
                    } = this.props;
                    return (0, s.jsxs)(u.default, {
                        className: o.gatedContent,
                        justify: u.default.Justify.CENTER,
                        align: u.default.Align.CENTER,
                        direction: u.default.Direction.VERTICAL,
                        children: [(0, s.jsx)("div", {
                            className: l(o.image, f)
                        }), (0, s.jsx)("div", {
                            className: l(o.title, c.marginBottom8),
                            children: e
                        }), (0, s.jsx)("div", {
                            className: l(o.description, c.marginBottom20),
                            children: t
                        }), (0, s.jsxs)(u.default, {
                            justify: u.default.Justify.CENTER,
                            align: u.default.Align.CENTER,
                            grow: 0,
                            children: [null != r ? (0, s.jsx)(a.Button, {
                                className: o.action,
                                size: a.ButtonSizes.LARGE,
                                color: a.ButtonColors.PRIMARY,
                                onClick: d,
                                children: r
                            }) : null, null != n ? (0, s.jsx)(a.Button, {
                                className: o.action,
                                color: a.Button.Colors.RED,
                                size: a.ButtonSizes.LARGE,
                                onClick: i,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = d
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                u = n.n(i),
                s = n("77078"),
                r = n("145131"),
                d = n("296165"),
                o = n("926622");
            class c extends l.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: l,
                        onAgree: i,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, a.jsxs)(r.default, {
                        className: d.gatedContent,
                        justify: r.default.Justify.CENTER,
                        align: r.default.Align.CENTER,
                        direction: r.default.Direction.VERTICAL,
                        children: [(0, a.jsx)("div", {
                            className: u(d.image, f)
                        }), (0, a.jsx)("div", {
                            className: u(d.title, o.marginBottom8),
                            children: e
                        }), (0, a.jsx)("div", {
                            className: u(d.description, o.marginBottom20),
                            children: t
                        }), (0, a.jsxs)(r.default, {
                            justify: r.default.Justify.CENTER,
                            align: r.default.Align.CENTER,
                            grow: 0,
                            children: [null != l ? (0, a.jsx)(s.Button, {
                                className: d.action,
                                size: s.ButtonSizes.LARGE,
                                color: s.ButtonColors.PRIMARY,
                                onClick: c,
                                children: l
                            }) : null, null != n ? (0, a.jsx)(s.Button, {
                                className: d.action,
                                color: s.Button.Colors.RED,
                                size: s.ButtonSizes.LARGE,
                                onClick: i,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = c
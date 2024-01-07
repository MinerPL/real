            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, u, i, l, a = n("37983"),
                o = n("884691"),
                s = n("414456"),
                c = n.n(s),
                d = n("145131"),
                _ = n("298754");
            (r = i || (i = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (u = l || (l = {})).SMALL = "small", u.LARGE = "large", u.NONE = "none";
            let E = {
                    primary: _.colorPrimary,
                    secondary: _.colorSecondary,
                    warning: _.colorWarning,
                    error: _.colorError
                },
                f = {
                    small: _.small,
                    large: _.large,
                    none: null
                };
            class T extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: r,
                        className: u,
                        iconClassName: i
                    } = this.props;
                    return (0, a.jsxs)(d.default, {
                        className: c(_.note, E[t], u),
                        align: d.default.Align.CENTER,
                        children: [(0, a.jsx)(e, {
                            className: c(_.icon, f[r], i)
                        }), (0, a.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            T.Colors = i, T.Sizes = l;
            var S = T
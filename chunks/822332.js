            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                d = n("782340"),
                u = n("440318");
            let o = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = o.BLOCK,
                        style: l
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: i(t, s),
                        style: l,
                        children: [(0, a.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [d.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(r.Text, {
                            className: i(u.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = o;
            var f = c
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("77078"),
                a = i("145131"),
                l = i("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: i,
                        icon: r
                    } = e;
                    return (0, n.jsxs)(a.default, {
                        className: l.wrapper,
                        align: a.default.Align.BASELINE,
                        children: [null != r && (0, n.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: l.icon
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: l.title,
                            children: t
                        }), null != i && "" !== i ? (0, n.jsx)(s.Text, {
                            variant: "text-xs/semibold",
                            className: l.subtitle,
                            children: i
                        }) : null]
                    })
                }
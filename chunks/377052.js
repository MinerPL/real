            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                n = s.n(l),
                r = s("77078"),
                o = s("258078"),
                i = s("782340"),
                c = s("63126");

            function u(e) {
                let {
                    onComplete: t
                } = e;
                return (0, a.jsxs)(r.Clickable, {
                    className: c.container,
                    onClick: t,
                    children: [(0, a.jsx)(o.default, {
                        size: o.default.Sizes.SIZE_24,
                        className: c.title,
                        children: i.default.Messages.NUF_COMPLETE_TITLE
                    }), (0, a.jsx)(o.default, {
                        size: o.default.Sizes.SIZE_24,
                        className: n(c.title, c.subtitle),
                        children: i.default.Messages.NUF_COMPLETE_SUBTITLE
                    }), (0, a.jsx)(r.Button, {
                        color: r.Button.Colors.WHITE,
                        onClick: t,
                        children: i.default.Messages.NUF_COMPLETE_CTA
                    })]
                })
            }
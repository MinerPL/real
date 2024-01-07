            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("642622");

            function i(e) {
                let {
                    title: t,
                    settings: s
                } = e;
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(n.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: l.header,
                        children: t
                    }), s.map(e => e.renderComponent())]
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("194250"),
                r = l("782340"),
                i = l("11644");

            function u(e) {
                let {
                    isSlideReady: t,
                    ...l
                } = e;
                return (0, n.jsxs)("div", {
                    className: i.slideContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i.header,
                        children: [(0, n.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: i.text,
                            variant: "text-sm/normal",
                            children: r.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, n.jsx)(s.default, {
                        ...l,
                        canSetFocus: t
                    })]
                })
            }
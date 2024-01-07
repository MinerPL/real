            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("782340"),
                l = s("134205");

            function i(e) {
                let {
                    showDirtyIndicator: t
                } = e;
                return t ? (0, a.jsxs)("div", {
                    className: l.container,
                    children: [n.default.Messages.GUILD_TEMPLATES, (0, a.jsx)("div", {
                        className: l.dot
                    })]
                }) : (0, a.jsx)(a.Fragment, {
                    children: n.default.Messages.GUILD_TEMPLATES
                })
            }
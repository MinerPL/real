            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("406291"),
                c = l("115448");

            function o(e) {
                let {
                    commands: t,
                    className: l
                } = e;
                return (0, i.jsx)("div", {
                    className: n(c.list, l),
                    children: t.map(e => (0, i.jsxs)("div", {
                        className: c.row,
                        children: [(0, i.jsxs)(s.Text, {
                            className: c.commandName,
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: [r.COMMAND_SENTINEL, e.displayName]
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: e.displayDescription
                        })]
                    }, e.id))
                })
            }